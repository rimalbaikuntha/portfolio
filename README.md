# Baikuntha Rimal — Portfolio Website

## 📁 File Structure
```
portfolio/
├── index.html          ← Main website
├── style.css           ← All styles
├── app.js              ← All JS logic + data
├── api/
│   ├── save_project.php   ← Save new project (POST)
│   ├── get_projects.php   ← Load projects (GET)
│   └── contact.php        ← Contact form handler (POST)
├── data/               ← Auto-created by PHP
│   ├── projects.json   ← Persisted projects
│   └── messages.json   ← Contact messages
└── README.md
```

## 🚀 Setup

### Static (No PHP) — Works Immediately
Just open `index.html` in a browser. All 12 default projects load from `app.js`.

### With PHP (Full Dynamic Features)
1. Upload all files to a PHP server (Apache/Nginx + PHP 7.4+)
2. Ensure `/data/` directory is writable: `chmod 755 data/`
3. To enable email, edit `api/contact.php` and uncomment the `mail()` section
4. Visit `index.html` in your browser

## ✏️ Customizing Data

### Add/Edit Your Personal Info
- Edit `JOURNEY_DATA` in `app.js` for career timeline
- Edit `ACHIEVEMENTS_DATA` for awards
- Edit `TESTIMONIALS_DATA` for quotes
- Update contact links in `index.html`

### Add Profile Photo
Replace the `.initials-big` div in `index.html`:
```html
<img src="your-photo.jpg" alt="Baikuntha Rimal" />
```

### Dynamic Project Management
Click **"⚙ Manage Projects"** at the bottom of the Projects section to add new projects via the admin form. With PHP, projects persist in `/data/projects.json`.

## 🔍 SEO Features
- Full meta tags (OG, Twitter Card, description, keywords)
- Semantic HTML5 structure
- Schema-friendly headings hierarchy
- Fast-loading (no heavy frameworks)

## 🎨 Color Customization
Edit CSS variables at the top of `style.css`:
```css
:root {
  --gold: #D4A853;    ← Primary accent
  --accent: #FF6B35;  ← Secondary accent
  --teal: #00D4AA;    ← Status color
  --bg: #080B12;      ← Background
}
```
