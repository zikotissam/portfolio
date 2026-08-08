# Portfolio

Static single-page portfolio for Zakaria Lakhdar. Minimal dark theme.

Live at https://84-8-222-198.sslip.io (Caddy + Let's Encrypt on the VPS).

## Dev

Just open `index.html` in a browser. No build step.

## Deploy

Copy the files to /opt/apps/portfolio on the VPS (Caddy serves them directly):

```
scp index.html style.css projects.js profile.jpg favicon.svg oracle-vps:/opt/apps/portfolio/
```
