# CedarVibes — green-and-gold cosmetic design direction
Date: 2026-11-11
Status: Staging only. **Nothing in this folder is applied to production.**

Requested:
- Center the cedar tree on the opening homepage hero.
- Replace low-quality/blurry trees with appropriately sharp, scalable versions.
- Recolor the site with forest green and restrained warm gold accents.

Root causes found in recovered production sources:
- Header JPEG is only 160×116 px, hero JPEG 640×427 px.
- Hero card has `transform:rotate(2deg)`, so it is never perfectly level.
- Existing header logo CSS has radial masking/fades, creating visible softness.
- Hero image uses `object-fit: cover` so its sides may get cropped.
- GitHub branch still does not contain the 8 site recovery files in its root, as verified through connected GitHub on November 11.

Design implementation prepared in local ZIP `CedarVibes-Green-Gold-DEV-Ready.zip`:
- Deep forest green #173E2D; pine #286047
- Warm metallic gold #B68A3E; soft gold #EBD59D
- Off-white background #FCFAF4
- Replace both tree JPEG displays with editable sharp SVG brand marks in `assets/`, retaining JPG originals as fallback.
- Keep all product links, consent analytics, and existing pages intact.
- New theme CSS also available here as `design/green-gold-overrides.css`.

**Do not deploy or merge to main**. Verify new tree art matches the user's preference and test a complete staging build first.
