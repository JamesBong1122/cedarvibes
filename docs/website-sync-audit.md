# CedarVibes deployment synchronization audit
Updated: 2026-10-25

## Confirmed
- Production Vercel project: `cedarvibes`, linked to `JamesBong1122/cedarvibes`.
- Last independently checked production deployment: `dpl_H9J3dJhpwi7NMCpXoQcaWE7bZpTK`, READY.
- Custom domain: https://shopcedarvibes.com
- GitHub `main` has these 11 source files copied from production: `about.html`, `config.js`, `disclosure.html`, `guide-gifts-under-50.html`, `guide-new-home.html`, `guide-small-kitchen.html`, `guide-wedding-emergency.html`, `privacy.html`, `robots.txt`, `sitemap.xml`, `vercel.json`.

## Still missing from the GitHub source backup
- `index.html` (homepage)
- `wedding-planner.html`
- `analytics.js` (Google Analytics measurement ID `G-3365K1MGEV`, consent and Etsy click event)
- `script.js`
- `styles.css`
- `wedding-spotlight.css`
- `cedarvibes-header-tree-web.jpg`
- `cedarvibes-hero-fixed-web.jpg`

The Vercel source read endpoint returned only a truncated prefix of longer files and binary images. A partial file must never be committed in place of the original.

## Deployment safety
- This branch is a staging/work branch: do not merge to `main` or deploy it as production until all missing files are recovered and tested.
- Ensure the live production site has not been replaced by an incomplete GitHub deployment.
- On completion, compare production site pages and metadata, keep Etsy listings and analytics, test navigation and 404s, then merge atomically.
- Changes to GitHub may trigger deployments automatically; previews may be created but production should be protected.
