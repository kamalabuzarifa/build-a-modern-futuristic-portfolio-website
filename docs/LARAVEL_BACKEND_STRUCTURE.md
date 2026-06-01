# Laravel Backend Structure

## Proposed Folder Layout

backend/
- app/
  - Http/
    - Controllers/
      - Api/
        - ContactController.php
  - Models/
    - ContactMessage.php
- database/
  - migrations/
    - 2026_06_01_000000_create_contact_messages_table.php
- routes/
  - api.php

## API Contract

### POST `/api/contact`

Request JSON:

```json
{
  "name": "Kamal Abu Zarifa",
  "email": "kamal@example.com",
  "message": "Hello from portfolio contact form."
}
```

Response JSON:

```json
{
  "success": true,
  "message": "Message received successfully."
}
```

## Security Notes

- Keep CORS restricted to frontend domain in production.
- Add rate limiting (`throttle`) on contact endpoint.
- Use Laravel validation and optional CAPTCHA for spam control.
