# CedarVibes production outage / restoration — 2026-11-11

## Root cause confirmed
- Vercel `shopcedarvibes.com` alias pointed to production deployment `dpl_E5EAeKC19Njix9f7gUZcE2uiu7MY` built from GitHub `main` commit `53d05ae3a1cdbfc636a6cd0792e77658d3d910d7`.
- GitHub `main` lacks `index.html` and other production files. Vercel marked the incomplete build READY, but the website rendered a 404 NOT_FOUND.
- The change occurred on October 25, 2026, when files were being individually backed up to GitHub.

## Recovery performed
- Located the previous fully populated production deployment `dpl_H9J3dJhpwi7NMCpXoQcaWE7bZpTK` (October 23, 2026), which contains the homepage, wedding planner, analytics, stylesheets, scripts, images, sitemap and links.
- Promoted that deployment to production with Vercel's existing-deployment promotion; no rebuild.
- Verified via Vercel alias API that `shopcedarvibes.com` now points to `dpl_H9J3dJhpwi7NMCpXoQcaWE7bZpTK`; Vercel reports alias mapping completed.
- HTTP browser-level verification is still required to confirm page rendering, links, and analytics.

## Safeguards
- DO NOT push or merge to GitHub `main` until the source backup includes all production files. Every `main` commit may trigger another incomplete production deployment and cause a new 404.
- Carry out new work on `cedarvibes-safe-sync-and-marketing` only; treat preview deployments as previews, not publication.
- Do not upload the reconstructed `CedarVibes--Website-UPDATED.zip` directly to production. It is not an exact copy of the previously live design and is missing images and additional CSS.
- The website uses commercial affiliate and product links. Resolve hosting-plan compatibility before expanding the business.

## Remaining Phase 1 tasks
1. Recover the exact source files from the known-good Vercel deployment (especially `index.html`, `wedding-planner.html`, `analytics.js`, `script.js`, `styles.css`, `wedding-spotlight.css`, and both JPG assets).
2. Compare recovered source with the available local ZIP and commit verified files to a non-production branch.
3. Verify pages: `/`, `/wedding-planner`, `/privacy`, `/sitemap.xml`, `/etsy`; check Etsy links and Google Analytics consent.
4. Only after staged build matches working production should the complete source be merged atomically to `main` and its production behavior checked.
