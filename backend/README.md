# Contact SMTP Backend

This backend sends portfolio contact form messages directly to your email via SMTP.

## What It Does

- Receives contact form requests from the frontend.
- Validates `name`, `email`, and `message`.
- Sends the message to `kamalabuzarifa@gmail.com` via SMTP.

## Setup

1. Install dependencies:
   - `cd backend`
   - `npm install`
2. Create env file:
   - `copy .env.example .env` (Windows)
3. Set your Gmail App Password in `.env`:
   - `SMTP_USER=kamalabuzarifa@gmail.com`
   - `SMTP_PASS=YOUR_16_CHAR_APP_PASSWORD`

## Run

- Development: `npm run dev`
- Production: `npm start`

Server runs by default on `http://localhost:8000`.

## Endpoint

- `POST /api/contact`
  - JSON body: `name`, `email`, `message`
  - Sends email to `CONTACT_TO`
