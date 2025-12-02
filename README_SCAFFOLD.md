# Project scaffold and quick start

I added a small static scaffold to help you get started quickly. Files added at project root:

- `index.html` — Home page
- `about.html` — About page
- `services.html` — Services page
- `contact.html` — Contact page with a demo form
- `css/styles.css` — Main stylesheet
- `js/main.js` — Minimal JS for nav, reveal, and form validation
- `images/README.txt` — Placeholder for images

Branding and assets added:

- Color scheme: navy (`#0b2545`) + burnt orange (`#ff6a13`).
- `images/logo.svg` — SVG text logo.
- `images/favicon.svg` — favicon.
- `images/hero.svg` — hero illustration placeholder.
- `images/placeholder-1.svg` — generic image placeholder.

Updates made to pages:

- Site name changed to `yonney` across pages and assets.
- `about.html`: new hero, values, interactive team profiles with animated skill bars.
- `services.html`: improved layout with expandable service cards.

Interactive notes:

- Team profiles can be toggled (keyboard accessible) and animate skill bars.
- Service cards have "Learn more" buttons that reveal details.


I also added Google Font `Inter` and updated HTML meta tags (description & OG) for basic SEO.

How to preview locally:

- Open `index.html` in your browser (double-click or use a simple static server).

Quick local server (PowerShell) — serve from project root:

```powershell
python -m http.server 8000; Start-Process "http://localhost:8000"
```

Deployment (GitHub Pages):

1. Push the repository to GitHub (if not already pushed).
2. In the repository on GitHub go to `Settings` → `Pages` and select the `main` branch and `/ (root)` folder, then save.
3. Wait a minute and visit the provided Pages URL.

For Netlify or Vercel, drag-and-drop the site folder or connect the repo for automatic deploys.


---

If you'd like, I can now:

- Update the main `README.md` with these notes (I tried but couldn't update the file; I can try again).
- Add images or replace placeholder text with your content.
- Run a quick local preview and fix styling tweaks.

Which should I do next?