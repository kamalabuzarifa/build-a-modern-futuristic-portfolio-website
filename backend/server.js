import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 8000);
const defaultOrigins = ["http://localhost:5173", "http://127.0.0.1:5173"];
const frontendOrigin = process.env.FRONTEND_ORIGIN || "";
const allowedOrigins = [
  ...defaultOrigins,
  ...frontendOrigin.split(",").map((item) => item.trim()).filter(Boolean)
];

app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }

    callback(new Error("Not allowed by CORS"));
  }
}));
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "contact-smtp-api" });
});

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

app.post("/api/contact", async (req, res) => {
  const name = String(req.body?.name || "").trim();
  const email = String(req.body?.email || "").trim();
  const message = String(req.body?.message || "").trim();

  if (!name || !email || !message) {
    return res.status(422).json({ success: false, message: "Missing required fields." });
  }

  if (!isValidEmail(email)) {
    return res.status(422).json({ success: false, message: "Invalid email address." });
  }

  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpSecure = String(process.env.SMTP_SECURE || (smtpPort === 465)).toLowerCase() === "true";
  const smtpRequireTls = String(process.env.SMTP_REQUIRE_TLS || (smtpPort === 587)).toLowerCase() === "true";
  const smtpUser = process.env.SMTP_USER || "";
  const smtpPass = process.env.SMTP_PASS || "";

  if (!smtpUser || !smtpPass) {
    return res.status(500).json({
      success: false,
      message: "SMTP is not configured. Set SMTP_USER and SMTP_PASS in backend/.env"
    });
  }

  const to = process.env.CONTACT_TO || "kamalabuzarifa@gmail.com";
  const from = process.env.CONTACT_FROM || smtpUser;

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      requireTLS: smtpRequireTls,
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `New Portfolio Contact - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `
    });

    return res.status(201).json({
      success: true,
      message: "Message sent successfully."
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to send email via SMTP."
    });
  }
});

app.listen(port, () => {
  console.log(`Contact SMTP API is running on http://localhost:${port}`);
});
