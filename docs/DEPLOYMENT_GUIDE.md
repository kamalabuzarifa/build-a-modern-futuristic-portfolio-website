# Deployment Guide

## 1. Frontend (Vite)

1. Install dependencies:
   - `npm install`
2. Build:
   - `npm run build`
3. Deploy `dist/` to Vercel, Netlify, or Nginx static hosting.

## 2. Backend (Laravel API)

1. Provision PHP, Composer, MySQL.
2. Configure `.env`:
   - `APP_ENV=production`
   - `APP_DEBUG=false`
   - DB credentials
3. Run:
   - `composer install --optimize-autoloader --no-dev`
   - `php artisan key:generate`
   - `php artisan migrate --force`
4. Point web server to Laravel `public/`.

## 3. Connect Frontend to Backend

- Set frontend environment variable:
  - `VITE_API_URL=https://api.your-domain.com/api`

## 4. SEO Checklist

- Update canonical URL in `index.html`.
- Add real OG image at `/public/og-cover.png`.
- Register property in Google Search Console.
- Submit sitemap: `/sitemap.xml`.

## 5. Performance Checklist

- Use gzip/brotli compression.
- Serve static assets with cache headers.
- Enable HTTP/2 or HTTP/3.
