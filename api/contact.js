import nodemailer from "nodemailer";

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

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
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpSecure = String(process.env.SMTP_SECURE || "false").toLowerCase() === "true";
  const smtpRequireTls = String(process.env.SMTP_REQUIRE_TLS || "true").toLowerCase() === "true";
  const smtpUser = process.env.SMTP_USER || "";
  const smtpPass = process.env.SMTP_PASS || "";

  if (!smtpUser || !smtpPass) {
    return res.status(500).json({
      success: false,
      message: "SMTP is not configured. Set SMTP_USER and SMTP_PASS in Vercel environment variables."
    });
  }

  const to = process.env.CONTACT_TO || smtpUser;
  const from = process.env.CONTACT_FROM || smtpUser;

  if (!isValidEmail(from) || !isValidEmail(to)) {
    return res.status(500).json({
      success: false,
      message: "CONTACT_FROM and CONTACT_TO must be valid email addresses."
    });
  }

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

    return res.status(200).json({
      success: true,
      message: "Message sent successfully."
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to send email via SMTP."
    });
  }
}
