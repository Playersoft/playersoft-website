# Playersoft Design System

Design system for **Playersoft** — casino loyalty and player-development software. Playersoft builds mobile and desktop technology that lets casino teams enroll new players, manage marketing promotions, and deliver personalized guest service in real time, from the floor or the back office.

This system encodes the brand's colors, type, assets, reusable UI components, and product UI kits so agents and designers can produce on-brand interfaces and assets.

## Sources provided
- **`uploads/Playersoft_Logo_CMYK.svg`** — the master logo (wordmark + 3D cube mark). Delivered as a single-color CMYK vector; recolored into the new palette under `assets/`.
- **Company description** (product positioning, above).
- **Brand color direction:** transition away from the legacy Red/Gold toward **`#CCFFFF` (pale cyan)** and **`#003366` (navy)**. This system is built entirely around that new direction.

No codebase, Figma file, decks, or brand fonts were provided. Fonts and iconography are documented substitutions (see below) — replace with official assets when available.

---

## Content fundamentals
How Playersoft writes:
- **Voice:** confident, operational, hospitality-warm. It speaks to casino staff (hosts, marketing) as capable operators, not consumers. Tone is clear and action-first, never salesy or jargon-heavy.
- **Address:** product talks about the operator's world ("your players", "enroll a player"). Second person for actions the user takes; third person for players ("she earned 2,340 pts").
- **Casing:** Sentence case for headings, buttons, and labels ("Enroll player", "New promotion"). Uppercase reserved for small eyebrow/overline labels and table headers, always with wide tracking ("PLAYER DEVELOPMENT").
- **Verbs:** short, imperative CTAs — *Enroll, Issue reward, Redeem, Schedule, Manage*. Prefer the specific domain verb over generic "Submit/OK".
- **Numbers:** points, IDs, currency, and percentages are first-class content. Always render in the mono/tabular face; format with thousands separators ("128,450 pts"), member IDs as "PS-####-####".
- **Tagline register:** punchy triads — e.g. *"Enroll. Reward. Delight."* / *"All in real time."*
- **Emoji:** none. Status is communicated with badges, dots, and tier chips — never emoji.
- **Vibe:** real-time, floor-ready, precise. Casino energy expressed through confident type and the aqua accent, *not* through red/gold "jackpot" clichés.

---

## Visual foundations
- **Color:** Navy (`#003366`) is the primary/brand anchor; a pale-cyan (`#CCFFFF`) + aqua family (`--aqua-500 #1cc0db`) supplies accent, energy, and highlights. Neutrals are cool, subtly navy-tinted grays. Legacy red/gold are gone; red survives **only** as the `danger` semantic and a muted amber only as `warning`. Max one or two background colors per surface — white cards on a light gray page, or the navy gradient for inverse/hero areas.
- **Backgrounds:** flat surfaces by default. Navy gradients (`--gradient-navy`, `--gradient-hero`) are used for the app sidebar, mobile hero headers, and marketing banners. No photographic backgrounds, no textures, no noise. The aqua gradient (`--gradient-aqua`) is reserved for small accents (progress fills, chips), never full pages.
- **Type:** display/headings in **Sora** (700–800, tight tracking) for a modern, confident tech feel; body & UI in **Figtree** (400–600); numeric data in **JetBrains Mono** with `tabular-nums`. Big, tight headlines; comfortable 1.5–1.6 body line-height.
- **Spacing:** 4px base grid (`--space-*`). Cards use 24px padding, 12–16px internal gaps. Containers cap at ~1180–1400px.
- **Corners:** crisp and soft, not pill-happy. Controls use `--radius-sm` (6px), cards `--radius-lg` (14px), dialogs `--radius-xl` (20px). Full pills (`--radius-pill`) only for badges, tags, tier chips, and toggles.
- **Borders:** hairline 1px in cool grays (`--border-subtle`/`--border-default`). On dark surfaces, borders are translucent cyan (`--border-inverse`).
- **Shadows:** cool, navy-tinted elevation (`--shadow-xs…xl`), never pure black. A dedicated aqua **glow** (`--shadow-accent`) and focus ring (`--shadow-focus`) add energy on emphasis/interaction. Cards sit at `sm`, lift to `md` on hover.
- **Cards:** white surface, 1px subtle border, `--radius-lg`, `--shadow-sm`. Interactive cards translate up 2px and raise to `--shadow-md` on hover.
- **Hover:** buttons darken to a `-hover` token; ghost/secondary fill with a faint cyan/gray tint; cards lift. **Press:** primary buttons nudge down ~0.5px and darken to `-active`.
- **Motion:** quick and purposeful. `--dur-fast 120ms` for hovers, `--dur-base 200ms` for toggles/entrances, `--dur-slow 320ms` for progress. Standard easing `cubic-bezier(.2,0,0,1)`; emphasized easing for dialogs and switch knobs. Dialogs fade + rise 8px. No bounces, no decorative looping animation.
- **Transparency / blur:** used sparingly — dialog overlay is `rgba(0,18,34,.55)` with a light `blur(3px)`. No frosted-glass everywhere.
- **Focus:** visible aqua focus ring (`--focus-ring` / `--shadow-focus`) on inputs and buttons — accessibility is not optional in an operational tool.
- **Imagery vibe:** cool and clean; if photography is introduced it should skew cool/blue-toned. No warm casino-red imagery.

---

## Iconography
- **Set:** clean, 2px-stroke, rounded line icons. **No brand icon assets were provided**, so the system substitutes **Lucide** (github.com/lucide-icons/lucide, ISC license) — the closest match in stroke weight and rounding. ⚠️ *Substitution flagged — replace with Playersoft's official icon set if one exists.*
- **Delivery:** icons are inlined as SVG (stroke = `currentColor`, so they inherit text color) via a small `Icon` component (`window.PSIcon`) in each UI kit's `icons.jsx`. This avoids a CDN dependency and keeps them recolorable. The icon paths there are the canonical subset in use.
- **Usage:** icons pair with text in buttons and nav; icon-only actions use the `IconButton` component and require an `aria-label`. Standard sizes 16 / 18 / 22 px. Domain glyphs in play: users, gift, megaphone, coins, wallet, qr, trend, star.
- **No emoji, no unicode-glyph icons.** Status uses `Badge` dots and `TierBadge`, not symbols.
- **Logo/mark:** the 3D cube mark (`assets/mark-*.svg`) doubles as an app icon / avatar backdrop. Never redraw it — use the provided files.

---

## Components
Reusable primitives (React, styled via CSS custom properties). Import from the compiled bundle: `const { Button } = window.PlayersoftDesignSystem_7bdeae`.

**Forms** (`components/forms/`)
- **Button** — primary/accent/secondary/ghost/danger actions.
- **IconButton** — square icon-only button.
- **Input** — labeled text field with hint/error/icon.
- **Select** — styled dropdown.
- **Checkbox** — labeled checkbox.
- **Switch** — on/off toggle.

**Data & display** (`components/display/`)
- **Card** + **CardHeader** — surface container & header row.
- **StatTile** — KPI metric tile with delta.
- **Badge** — status pill.
- **Tag** — outlined, optionally-removable chip.
- **Avatar** — player/staff avatar with tier ring.
- **TierBadge** — loyalty-tier badge (Bronze→Diamond).
- **ProgressBar** — tier/goal progress.

**Feedback** (`components/feedback/`)
- **Alert** — inline banner (info/success/warning/danger).
- **Dialog** — modal with footer actions.

**Navigation** (`components/navigation/`)
- **Tabs** — underline or pill tab bar.

*Intentional additions:* `StatTile`, `Avatar`, `TierBadge`, `ProgressBar` are casino-loyalty domain primitives added because the product's core surfaces (points, tiers, KPIs) can't be built cleanly without them.

---

## UI kits
- **`ui_kits/console/`** — **Playersoft Console** (desktop): marketing & player-management dashboard. Dashboard, Players table + detail dialog, Promotions manager. Entry `index.html`.
- **`ui_kits/floor-app/`** — **Playersoft Floor** (mobile): on-floor host app in an iOS frame. Lookup, Enroll, Player profile, Issue-reward dialog. Entry `index.html`.

---

## Repository index
- `styles.css` — global entry point (import this); `@import`s everything below.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`.
- `assets/` — `logo-{navy,light,white}.svg`, `mark-{navy,light,white}.svg`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Effects, Brand).
- `components/` — reusable primitives (see above), each with `.jsx`, `.d.ts`, `.prompt.md`, and a directory card.
- `ui_kits/` — product recreations (Console, Floor).
- `thumbnail.html` — design-system homepage tile.
- `SKILL.md` — Agent-Skills-compatible entry for downloadable use.

## Caveats / to replace
- **Fonts** are Google Fonts substitutions (Sora / Figtree / JetBrains Mono) — no brand fonts were supplied.
- **Icons** are Lucide substitutions — no brand icon set was supplied.
- The **logo** is recolored from the single provided CMYK file; two-tone or alternate lockups were not provided.
