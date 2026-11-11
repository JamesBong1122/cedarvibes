# CedarVibes — Phase 1 recovery verification (November 11, 2026)

## User-confirmed working
- **Homepage:** visible again on `https://shopcedarvibes.com/`.
- **Wedding Planner page:** opens successfully.
- **Wedding Planner Etsy button:** opens the intended Etsy listing.

## Vercel restoration verified
- Domain `shopcedarvibes.com` currently mapped back to complete earlier deployment `dpl_H9J3dJhpwi7NMCpXoQcaWE7bZpTK`, status READY.
- The known-good deployment's source tree includes 19 files, including `index.html`, `wedding-planner.html`, `analytics.js`, CSS, JavaScript, images, and sitemap.
- The previous production 404 was caused by promotion of an incomplete GitHub `main` deployment that lacked `index.html`.

## Phase 1 work still outstanding
- Recover all 8 missing production files into version control: `index.html`, `analytics.js`, `wedding-planner.html`, `script.js`, `styles.css`, `wedding-spotlight.css`, `cedarvibes-header-tree-web.jpg`, `cedarvibes-hero-fixed-web.jpg`.
- Compare original and reconstructed CedarVibes ZIP archives against production; **do not assume either archive matches production exactly**.
- Test that a development preview of the completed source renders all current pages, links, and analytics consent accurately.
- Commit all verified files as a single reviewed version, then merge only when production-safe.
- Confirm analytics traffic separately; a working page is not evidence that Analytics data is flowing.

## Deployment protection rule
**Do not commit to `main` before all missing files are present and verified.** GitHub `main` is integrated with Vercel automatic production deployments and an incomplete build may replace the live site again.

## Hosting
The live site is still on Vercel Hobby; plan migration/commercial-compatible hosting separately after completing the recovery.
