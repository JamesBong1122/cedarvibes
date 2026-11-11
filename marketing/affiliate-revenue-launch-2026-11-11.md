# CedarVibes — Revenue-first affiliate launch sprint (November 11, 2026)

## Business objective
Move from website infrastructure work to the earliest credible revenue opportunities without buying inventory or overspending. Continue selling existing CedarVibes Etsy digital products while building trusted affiliate recommendation content.

## Reality check
- No confirmed affiliate-program approvals or live commission-earning links yet.
- Existing non-Etsy affiliate placeholders in config.js point to # and should not be represented as working affiliate links.
- No verified traffic or earnings data yet. Outbound clicks ≠ sales.
- Current production hosting: Vercel Hobby, which restricts commercial use. Migrate to a compatible commercial host (e.g., Cloudflare Pages if terms permit) or use a paid, approved option before scaling affiliate activity.

## Parallel workstreams
### A — Site safety (do not block research/content preparation)
1. Add eight recovered files from public website backup to the non-production branch ONLY: index.html, analytics.js, wedding-planner.html, script.js, styles.css, wedding-spotlight.css, cedarvibes-header-tree-web.jpg, cedarvibes-hero-fixed-web.jpg.
2. Keep existing vercel.json and robots.txt from main. Verify homepage, Wedding Planner, and Etsy links in preview.
3. Plan tested migration to commercial-compatible hosting; don't change DNS before a valid preview exists.

### B — First monetization effort
1. Keep promoting the existing Etsy listings: Wedding Planning Command Center, Meal Planner & Grocery Budget, Budget & Debt Payoff, Small Business Profit Dashboard.
2. Prioritize two affiliate-content verticals where we have adjacent assets:
   - Wedding essentials: wedding-day emergency kit; wedding vendor/party preparation; pair with existing Wedding Planner.
   - Small kitchens: organization and meal-prep essentials; pair with existing Meal Planner.
3. Expand into gift guides only after these topics have working content and evidence of interest.
4. Identify 1–2 appropriate affiliate programs and check eligibility and commission terms before applying. Amazon Associates requests robust original content (its guidance suggests roughly 10 posts) and requires 3 qualifying sales in 180 days, so defer application until ready.
5. Never invent retailer approval, purchase links, product availability, prices, commissions or hands-on testing.
6. Use accessible product descriptions with evidence from current retailer specifications, verified product pages and limitations; clearly distinguish researched selections from hands-on reviews.
7. On pages containing affiliate links, put clear, conspicuous commission disclosures near relevant recommendations; observe partner-specific requirements.
8. Track traffic, outbound partner clicks, Etsy listing visits, and real commission/purchase reports separately.

## First content batch (write/review before publishing)
- 'Wedding Day Emergency Kit: What to Pack and Why' (affiliate guide; supports Wedding Planner digital product).
- 'Small Kitchen Essentials That Actually Save Counter Space' (affiliate guide; supports Meal Planner).
- 'Housewarming Gifts Under $50 That People Will Use' (secondary, test category).
- 'Wedding Planning Command Center: How to Get Organized' (digital-product landing page, also Pinterest landing page).

## Minimal distribution
- Prepare 6 original Pinterest Pins across weddings, kitchen organization, housewarming gifts and digital planners. Publish only after destinations are working and content claims are verified.
- Use two Pins to existing Etsy or website product pages while affiliate applications are pending; don't wait for affiliate approval to work on legitimate Etsy marketing.

## Cosmetic change policy
Collect desired aesthetic changes now; include them in the staging build before Cloudflare migration when possible. Do not delay live-site recovery or essential affiliate disclosures to chase cosmetic perfection.

## Proof-of-value criteria
Before adding new niches, review: site working; 1–2 approved affiliate programs; 2–3 original guides live; at least 6 tracked traffic sources/Pin posts; actual retailer click tracking; first verified commission or Etsy sale, not merely views.

## Safety
No new production Vercel deployment or GitHub main commit during partial backup. No store claims of immediate revenue or guaranteed sales.
