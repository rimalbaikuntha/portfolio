# Baikuntha Rimal — Portfolio

Static multi-page site (HTML/CSS/JS) with a small PHP contact handler.

Pages: `index`, `about`, `experience`, `work`, `recognition`, `contact`.

## Privacy
No phone number or email address appears in any page. Messages go through
`contact.php`, which reads the destination from `config.php` (not committed).

1. Copy `config.example.php` to `config.php` on the server.
2. Set `to` (your inbox) and `from` (an address on your own domain).

## Photo
Add `assets/photo.jpg` (4:5 portrait, ~800×1000). Until then a monogram is shown.

## Editing
Content lives directly in the HTML files. Colours and fonts are CSS variables at the top of `css/style.css`.
