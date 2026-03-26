# Donna Rosa / L&SUN Design System

Version: `v2.0`  
Status: active working specification for UI/UX refactor

## 1. Purpose

This document is the source of truth for redesigning the Donna Rosa / L&SUN website.

It exists to solve four real project problems:

- the current homepage is visually fragmented;
- product sections repeat the same pattern too many times;
- CTA hierarchy is too flat;
- the codebase does not yet have a maintainable design foundation.

This system defines:

- brand foundations;
- UX structure;
- visual rules;
- component behavior;
- technical implementation guidance;
- design QA criteria.

The system is intentionally practical. It is based on the current project, not on an abstract "ideal website".

## 2. Project Baseline

### 2.1 Current Project Facts

Based on the current `index.html`:

- `14` top-level sections
- `41` article blocks
- `21` product cards
- `7` collection sections driven by category navigation
- `47` button instances
- `42` secondary buttons
- `51` usages of `.soft-card`
- `7` chip filters

### 2.2 What This Means

The current site already has a lot of content, but not enough hierarchy.

The biggest structural signals:

- one generic card pattern is doing too much work;
- one generic secondary button pattern is overused;
- multiple collection sections are visually too similar;
- the first screen asks the user to make too many decisions at once;
- the homepage behaves more like a full catalog dump than a guided sales page.

### 2.3 Current Design Debt

#### Visual debt

- Too many similar section shells in sequence.
- Too many rounded containers competing for attention.
- Decorative styles are stronger than the layout rhythm in some places.
- Some areas feel premium, while others feel purely utilitarian.

#### UX debt

- The core user journey is not compressed enough.
- Hero contains too many equally weighted actions.
- Contact actions are repeated in several places with little prioritization.
- Catalog navigation is present, but the page still feels long and heavy.

#### Technical debt

- Design tokens are embedded directly in a monolithic page.
- Component roles are implicit instead of defined.
- Page styling is tightly coupled to a single file.
- Reusable section contracts do not exist yet.

## 3. Brand Platform

This site is not one brand with one tone. It is a shared platform with two commercial modes.

The design system must support both without creating two separate visual languages.

### 3.1 Shared Brand Promise

Donna Rosa / L&SUN should feel like:

- calm;
- tasteful;
- feminine without cliche;
- modern but not trendy for the sake of trendiness;
- soft and tactile;
- trustworthy and easy to order from.

### 3.2 Brand Essence

The emotional promise of the site:

`We help people choose and send flowers beautifully, without noise, confusion, or pressure.`

### 3.3 Audience and Jobs To Be Done

Primary audience segments:

1. People who need a bouquet quickly and want confidence, not complexity.
2. People who want a more refined bouquet or event composition and care about style.
3. Business and event customers who need reliability, coordination, and clear communication.

Core user jobs:

- understand which segment fits the budget and occasion;
- see examples quickly;
- trust the quality and style;
- contact a human fast;
- feel that ordering will be simple.

### 3.4 Brand Character Split

#### Donna Rosa

Role:

- approachable everyday floral brand

Traits:

- warm
- honest
- easy
- gentle
- practical

Design expression:

- warmer cream backgrounds
- softer pink-beige accents
- slightly more grounded product presentation
- friendlier and simpler copy

#### L&SUN

Role:

- premium floral and event direction

Traits:

- airy
- poised
- refined
- quiet
- editorial

Design expression:

- cleaner light surfaces
- more negative space
- stronger art direction in photography
- more restrained copy and sharper visual framing

### 3.5 Voice and Tone

Shared voice:

- calm
- warm
- supportive
- precise
- non-salesy

Write like this:

- "Podberem buket pod povod i budget"
- "Podtverdym sostav i stoimost srazu"
- "Pomozhem so srochnym zakazom"

Avoid:

- generic market phrases
- exaggerated luxury language
- pressure-driven sales phrasing
- bureaucratic copy

## 4. Experience Strategy

### 4.1 Primary User Flow

The homepage should optimize for this sequence:

1. Understand the offer.
2. Choose the right segment or category.
3. See a small number of strong examples.
4. Confirm delivery and ordering logic.
5. Contact manager or submit request.

If a page element does not help one of these five steps, it should not be primary.

### 4.2 Homepage Decision Model

The homepage is a guide, not the full catalog.

The homepage should do:

- orientation
- trust building
- segmentation
- conversion

The homepage should not do:

- display every category in full depth
- repeat the same product grid pattern over and over
- compete with the catalog page

### 4.3 Interaction Priority

One screen should have:

- 1 primary CTA
- 1 secondary CTA
- optional text-level tertiary actions

Never place 3-4 equally styled decisions at the same visual level unless the user is explicitly choosing a category.

### 4.4 Density Rules

The target feeling is "airy and guided", not "busy but premium".

Density targets:

- hero: one strong story, not a dashboard
- category area: overview first, depth later
- product displays: max 1-2 major product modules on homepage
- contact section: direct and low-friction

## 5. Information Architecture

### 5.1 Recommended Homepage Structure

1. `Header`
2. `Hero`
3. `Brand split: Donna Rosa / L&SUN`
4. `Category selector or curated catalog entry`
5. `Featured bouquets or seasonal offer`
6. `Services / event / business scenarios`
7. `Delivery and ordering`
8. `Contact and request form`

### 5.2 What Moves Off the Homepage

These deserve separate views, tabs, or dedicated category pages:

- full product catalog
- budget-specific grids
- wedding collection depth
- corporate collection depth
- all repeated segment grids

### 5.3 Future Page Structure

Recommended future routes:

- `/catalog`
- `/catalog/donna-rosa`
- `/catalog/lsun`
- `/wedding`
- `/corporate`
- `/delivery`
- `/contacts`

This will let the homepage become stronger and shorter without losing content.

## 6. System Foundations

The design system must be token-based and layered.

### 6.1 Token Layers

#### Layer 1: raw tokens

These define base values:

- primitive colors
- font families
- type scale
- spacing scale
- radius scale
- shadow scale
- motion scale

#### Layer 2: semantic tokens

These define usage:

- page background
- card background
- text primary
- text secondary
- button primary background
- border subtle
- focus ring

#### Layer 3: component tokens

These define specific component rules:

- hero shell
- product card media ratio
- chip active state
- form input focus ring

### 6.2 Color System

The product should remain light-first.

Dark mode is not required for `v1` because the brand experience depends on soft warm surfaces and floral imagery.  
If dark mode is introduced later, it must be designed as a separate emotional system, not an automatic inversion.

#### Primitive palette

- `rose-050 #fbf6f3`
- `rose-100 #f6ece6`
- `rose-150 #f1e3df`
- `rose-200 #ead7da`
- `rose-300 #ddc0c8`
- `rose-400 #c99aa9`
- `rose-500 #b47d8d`
- `rose-600 #946274`
- `rose-700 #744956`
- `rose-800 #523640`

- `cream-050 #fffaf7`
- `cream-100 #fff6f1`
- `cream-200 #f8eee8`
- `cream-300 #efe2da`

- `sage-100 #e4ebe3`
- `warm-100 #e5d2bb`

#### Semantic color roles

- `page background`: warm cream with extremely soft atmospheric gradients
- `surface default`: off-white with subtle warmth
- `surface raised`: slightly brighter than page background
- `surface accent`: powder rose tint for supportive emphasis only
- `text primary`: muted plum-brown
- `text secondary`: dusty mauve-gray
- `border subtle`: low-contrast rose-gray
- `action primary`: deep rose-plum
- `action secondary`: soft bright surface with border
- `focus ring`: visible rose outline with accessible contrast

#### Color rules

- Maximum two accent hues in one section.
- Decorative gradients must never reduce contrast.
- Text must sit on stable surfaces, not busy image overlays.
- Pink is a brand note, not a page-wide saturation strategy.

### 6.3 Typography

#### Font roles

- Display and headings: `Cormorant Garamond`
- Body and interface: `Manrope`

#### Type scale

- `display-xl`: `72 / 0.9`
- `display-lg`: `56 / 0.92`
- `heading-xl`: `48 / 0.96`
- `heading-lg`: `40 / 1.0`
- `heading-md`: `32 / 1.04`
- `title-lg`: `28 / 1.1`
- `body-lg`: `18 / 1.7`
- `body-md`: `16 / 1.7`
- `body-sm`: `14 / 1.6`
- `label`: `12 / 1.3`

#### Typography rules

- Headings should be emotionally elegant but still easy to scan.
- No more than 2-3 lines for main headings.
- Product titles should stay within 2 lines.
- Uppercase labels must be used sparingly and with enough letter spacing.
- Paragraphs inside cards should remain short and compact.

### 6.4 Spacing System

#### Spacing scale

- `4`
- `8`
- `12`
- `16`
- `20`
- `24`
- `32`
- `40`
- `48`
- `64`
- `80`
- `112`

#### Layout spacing rules

- page section gap: `80-112`
- heading to subheading: `12-16`
- subheading to content: `24-32`
- card padding: `20-24`
- large panel padding: `28-40`
- grid gap desktop: `20-24`
- grid gap mobile: `16-20`

### 6.5 Layout System

#### Containers

- mobile side padding: `16px`
- tablet side padding: `20px`
- desktop side padding: `24px`
- max content width: `1200px`

#### Grid logic

- desktop: `12` columns
- tablet: `8` columns
- mobile: `4` columns

#### Layout rules

- Each section should use one dominant grid logic.
- Image-text modules should repeat consistent proportions.
- Cards of the same type must align to the same internal rhythm.
- If a block uses custom layout, that exception must be intentional and documented.

### 6.6 Radius, Border, Shadow, Motion

#### Radius scale

- small interactive: `12`
- field and pill: `18`
- standard card: `24`
- section shell: `32`
- hero shell: `40`

#### Border rules

- Borders are soft separators, not graphic outlines.
- Avoid sharp, dark, or overly visible strokes.
- Border and shadow must not compete with each other.

#### Shadow rules

- Use max 3 elevation levels.
- Shadows stay diffuse and quiet.
- No heavy, muddy, deep shadows.

#### Motion rules

- micro transitions: `180-240ms`
- section transitions: `320-480ms`
- large reveal motion should be optional and non-essential
- all motion must respect reduced-motion settings

## 7. Component Architecture

Current implementation uses broad generic classes.  
The refactor should move toward explicit component families.

### 7.1 Current-to-Target Mapping

| Current pattern | Current issue | Target component |
| --- | --- | --- |
| `.soft-card` | one class covers too many roles | `.c-card`, `.c-panel`, `.c-product-card`, `.c-contact-card` |
| `.button-secondary` | visually overused and under-prioritized | `.c-button--primary`, `.c-button--secondary`, `.c-button--tertiary`, `.c-link-action` |
| `.collection-section` | repeated 7 times with same shell | `catalog overview + dedicated category pages/tabs` |
| `.hero-actions` | 4 actions of similar weight | `1 primary + 1 secondary + optional text link` |
| `.chip` | overloaded between navigation and filtering | `.c-chip-nav`, `.c-chip-filter`, `.c-tag` |
| `.brand-card` | good concept, needs stronger system contract | `.c-brand-card` |
| `.contact-links` | every action looks equally important | `priority call stack with one primary route` |

### 7.2 Button System

#### Roles

- `primary`: key conversion action
- `secondary`: supportive action
- `tertiary`: lower emphasis surface action
- `text`: inline or low-pressure action

#### Rules

- One primary button per section.
- Secondary buttons should never dominate product grids.
- Hover states should feel tactile, not flashy.
- Focus-visible must be explicit.

### 7.3 Card Families

#### Product card

Structure:

1. media
2. tags
3. title
4. description
5. price/meta
6. action

Rules:

- fixed media ratio
- equal footer position
- no more than 2 tags in standard grid
- CTA anchored consistently

#### Panel card

Use for:

- service highlights
- delivery points
- info summaries
- support facts

Rules:

- one idea per card
- short heading
- one short paragraph
- optional micro-label

#### Brand card

Use for:

- Donna Rosa and L&SUN split

Rules:

- mirrored structure
- balanced visual weight
- one short intro paragraph
- 3-4 brand markers
- one controlled media area

### 7.4 Section Header Pattern

Structure:

1. eyebrow
2. title
3. subtitle
4. optional action

Rules:

- eyebrow is a context signal, not the star
- subtitle should add meaning, not repeat the headline
- action belongs to the right side only if it truly helps

### 7.5 Form System

Forms must feel simple and human.

Rules:

- keep first contact request short
- make manager contact more obvious than the fallback form
- show validation clearly and calmly
- avoid decorative styling that harms input readability
- future production version should not depend on `mailto` as primary submission model

### 7.6 Navigation System

Rules:

- 4-5 primary links max
- on mobile, brand switch and menu should remain compact
- sticky header should not feel like a heavy floating toolbar
- floating CTA should only appear when it improves conversion without duplicating other visible CTAs

## 8. Section Blueprints

### 8.1 Header

Must communicate:

- who the brands are
- how to navigate
- how to contact quickly

Target composition:

- brand switch
- 4-5 nav links
- one clear contact action
- compact mobile menu

### 8.2 Hero

Hero must answer:

- what this business offers
- for whom
- what to do next

Target content:

- one strong headline
- one short supporting paragraph
- one primary CTA
- one secondary CTA
- two or three trust facts
- one dominant visual story

Remove from hero:

- four equal CTAs
- too many supporting mini-surfaces
- list-like clutter

### 8.3 Brand Split Section

Purpose:

- help users self-select between accessible and premium direction

Target behavior:

- show clear difference in tone and offering
- allow quick jump into relevant catalog path
- maintain one shared visual language

### 8.4 Category Entry Section

Purpose:

- orient user without dumping the whole catalog

Target pattern:

- 4-6 category entries
- tabbed or grouped access
- curated wording
- one visual anchor

### 8.5 Featured Products

Homepage should contain:

- one strong featured module
- optional one seasonal or promotional module

Not:

- seven repeating product modules with the same shell

### 8.6 Services / Delivery

Purpose:

- reduce anxiety
- explain process
- signal reliability

Target format:

- one clear main process block
- two or three support cards
- short, concrete language

### 8.7 Contact

Priority order:

1. call manager
2. send message
3. leave request
4. review addresses

The contact section must feel direct and calm, not like another catalog area.

## 9. Content and Visual Direction

### 9.1 Copy Length Rules

- hero description: up to `220` characters if possible
- section subtitle: up to `240`
- product description: up to `120`
- tag: up to `24`

If copy does not fit, rewrite before resizing the component.

### 9.2 Photography Direction

Preferred imagery:

- natural soft light
- warm highlights
- clean composition
- limited background clutter
- tactile floral detail
- consistent crop logic per grid

Avoid:

- oversaturated edits
- mixed white balance in one section
- noisy backgrounds
- random crop ratios within the same module

### 9.3 Delight and Personality

The local design reference stresses that delight should be purposeful, not decorative.  
That fits this brand well.

Allowed delight:

- soft hover lifts
- graceful focus states
- elegant form success copy
- seasonal floral accents
- gentle visual shimmer on key actions

Avoid:

- loud novelty
- gimmicky animations
- easter eggs that distract from ordering
- ironic or jokey copy in conversion flows

The right mood is "quiet delight", not "playful interface".

## 10. Accessibility and Quality Bar

Minimum standard: `WCAG AA` for practical reading and navigation.

### Required

- accessible color contrast
- visible focus-visible states
- keyboard reachable actions
- meaningful labels and alt text
- motion does not block content access
- no critical info hidden only on hover
- tap targets at least `44x44`

### Product-specific accessibility rules

- floral imagery must not replace text meaning
- buttons on tinted backgrounds must remain clear
- form placeholders cannot replace labels
- chips and tags must not become tiny on mobile

## 11. Design QA Checklist

Before shipping any section, confirm:

- it answers one clear user question
- it has one clear visual priority
- it uses existing tokens
- it uses existing component contracts
- spacing follows the shared scale
- titles and descriptions fit without visual strain
- mobile view remains calm and readable
- CTA hierarchy is obvious
- imagery matches surrounding color temperature and style
- motion remains optional

## 12. Implementation Architecture

### 12.1 Required File Structure

The design system implementation starts with:

```text
src/styles/
  tokens.css
  system.css
```

Recommended next files once refactor begins:

```text
src/styles/
  tokens.css
  system.css
  sections.css
  utilities.css
```

### 12.2 CSS Strategy

- tokens first
- base styles second
- layout objects third
- components fourth
- page sections last

### 12.3 Naming Convention

Recommended naming:

- `l-*` for layout
- `c-*` for components
- `u-*` for utilities
- `is-*` for states
- `data-brand` for brand theming hooks

### 12.4 Developer Rules

- do not create one-off component variants unless documented
- do not solve copy overflow with random height growth
- do not use inline styles for system-level spacing or layout
- do not introduce new shadow or radius values casually
- do not duplicate button variants for slight visual differences

## 13. Refactor Priorities

### Phase 1: foundation

- move tokens out of monolithic page CSS
- normalize spacing, radii, shadow, type roles
- define component classes

### Phase 2: structure

- simplify header
- rebuild hero CTA hierarchy
- consolidate catalog entry experience

### Phase 3: content

- shorten copy
- reduce homepage repetition
- improve product card consistency

### Phase 4: polish

- tune motion
- unify photography treatment
- validate mobile experience and accessibility

## 14. Deliverables in This Repository

This design system now maps to:

- [design-system.md](/Users/elixz/Desktop/donna_rose_shop/docs/design-system.md)
- [ui-audit.md](/Users/elixz/Desktop/donna_rose_shop/docs/ui-audit.md)
- [tokens.css](/Users/elixz/Desktop/donna_rose_shop/src/styles/tokens.css)
- [system.css](/Users/elixz/Desktop/donna_rose_shop/src/styles/system.css)
- [sections.css](/Users/elixz/Desktop/donna_rose_shop/src/styles/sections.css)
- [site.js](/Users/elixz/Desktop/donna_rose_shop/src/scripts/site.js)

These files form the foundation for the next step: refactoring the actual page into the new system.
