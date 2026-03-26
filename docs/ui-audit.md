# Donna Rosa / L&SUN UI Audit

Status: snapshot of the current homepage before redesign

## 1. Current Inventory

- Top-level sections: `14`
- Article blocks: `41`
- Collection sections: `7`
- Product cards: `21`
- Button instances: `47`
- Secondary button instances: `42`
- Chip instances: `7`
- `.soft-card` usages: `51`

## 2. Main Findings

### 2.1 The page is too repetitive

The homepage currently contains `7` visually similar collection modules in sequence.  
Even though the content is different, the repeated shell makes the experience feel longer than it is.

### 2.2 Component roles are blurred

The same visual primitives are reused for too many jobs:

- `.soft-card` is used for products, service cards, contact surfaces, address blocks, and content shells.
- `.button-secondary` is used as if it were a universal action, so the page loses action hierarchy.

### 2.3 The hero has too many parallel decisions

Current hero behavior:

- 4 action buttons
- 3 metric cards
- decorative badges and notes
- image stack with multiple overlays

Result:

- strong visual impact
- weaker decision clarity

### 2.4 The homepage acts like a catalog

Instead of introducing the offer and guiding the user, the homepage currently tries to expose a large part of the assortment directly.

This creates:

- scroll fatigue
- reduced section contrast
- weaker perception of what matters most

### 2.5 Brand separation is conceptually good but not yet fully systematized

The `Donna Rosa` and `L&SUN` split is one of the strongest ideas in the current page.  
It should become a core structural device, not just one section among many.

## 3. Strong Elements Worth Keeping

- Elegant font pairing already supports the brand.
- Warm pastel palette already matches category and audience.
- Brand split section is strategically useful.
- Delivery and contact sections contain relevant trust information.
- Product imagery is strong enough to support a more editorial redesign.

## 4. Priority Problems to Fix First

### P1

- Reduce homepage repetition.
- Consolidate collection sections.
- Rebuild CTA hierarchy.

### P2

- Split generic cards into explicit card families.
- Split generic button variants into a true action system.
- Reduce visual density in hero and category entry.

### P3

- Shorten body copy in product modules.
- Reduce overuse of decorative surfaces.
- Make motion less structurally important.

## 5. Recommended Structural Direction

Use the homepage for:

- orientation
- segmentation
- trust
- conversion

Use dedicated catalog views for:

- full product depth
- budget filtering
- wedding detail
- corporate detail

## 6. Success Criteria for the Refactor

The redesign is successful if:

- the homepage becomes shorter and easier to scan;
- brand split becomes more useful;
- CTA hierarchy becomes obvious;
- repeated sections are reduced;
- product cards become structurally stable;
- the page still feels soft, calm, and premium without becoming busy.
