---
name: Apex Velocity & Precision
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#e6bdb8'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#ac8884'
  outline-variant: '#5c403c'
  surface-tint: '#ffb4ab'
  primary: '#ffb4ab'
  on-primary: '#690005'
  primary-container: '#dc2626'
  on-primary-container: '#fff6f5'
  inverse-primary: '#bf0715'
  secondary: '#7bd0ff'
  on-secondary: '#00354a'
  secondary-container: '#00a6e0'
  on-secondary-container: '#00374d'
  tertiary: '#ffb95f'
  on-tertiary: '#472a00'
  tertiary-container: '#a06500'
  on-tertiary-container: '#fff7f1'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb4ab'
  on-primary-fixed: '#410002'
  on-primary-fixed-variant: '#93000b'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.025em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: '0'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: '0'
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.05em
  code-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: '0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-sm: 0.75rem
  gutter-lg: 1.75rem
  margin: 2rem
  margin-sm: 1rem
  margin-lg: 2.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.25rem
---

## Brand & Style

The design system projects engineered precision, velocity, and enterprise-grade reliability tailored for motorcycle dealerships, dealer groups, and multi-brand showrooms. It bridges the visceral adrenaline of motorsport engineering with the operational clarity demanded by high-velocity SaaS workflows (inventory turns, VIN tracking, financing, workshop schedules, and floor-plan auditing).

### Aesthetic Direction: Modern High-Performance Tech
Drawing from contemporary engineering tools (such as Linear and Vercel) and precision performance dashboards, the visual style combines:
- **Graphite & Chrome Surfaces:** Technical layered slate and obsidian foundations that frame operational data cleanly without visual fatigue.
- **Apex Crimson Accents:** Deliberate, high-visibility kinetic red flashes reserved for primary conversions, status milestones, telemetry, and critical path CTAs.
- **Structural Density:** Information-dense, low-noise layouts that favor data hierarchy, legible typography, micro-borders, and tactile interaction states over decorative excess.
- **Physical Motoring Metaphors:** Crisp micro-radii reminiscent of milled aluminum, sub-pixel divider lines echoing chassis tolerances, and monospaced telemetry tokens for serials, VINs, and financial data.

## Colors

The palette leverages a precision motorsport color scheme tuned for extended usage in dealership offices, sales floors, and service bays. Dark mode serves as the primary canvas to reduce glare while handling dense inventory dashboards and mechanical schematics.

### Color Roles & Application

- **Primary (`#DC2626` - Apex Crimson):** The kinetic heartbeat of the interface. Applied strictly to primary action buttons, key state alerts, live trade-in bids, and highlighted metrics. Must never be diluted through over-application in large static backgrounds.
- **Secondary (`#38BDF8` - Titanium Cyan):** Used for analytical telemetry, secondary metrics, live pipeline flows, and diagnostic states across vehicle health indices.
- **Tertiary (`#F59E0B` - Amber Tach):** Dedicated to attention-demanding workflows: pending credit approvals, floor-plan aging warnings, and service bay schedule conflicts.
- **Neutral Core (`#0F172A` - Obsidian Graphite):** The anchor for the dark surface architecture, calibrated with blue-gray undertones:
  - Canvas Base: `#090D16`
  - Elevated Container / Cards: `#0F172A`
  - High Surface / Table Header: `#1E293B`
  - Active Element / Highlight: `#334155`
  - Sub-pixel Border: `#1E293B` (with `rgba(255, 255, 255, 0.08)` hover highlights)
- **High-Contrast Text Hierarchy:**
  - Primary Content: `#F8FAFC` (pure readability)
  - Secondary Metadata: `#94A3B8`
  - Muted / Disabled: `#64748B`

## Typography

The typographic strategy balances aerodynamic modernity with uncompromising utilitarian legibility.

- **Plus Jakarta Sans** provides geometric rhythm and clean structural weights for all dashboard navigation, section headers, analytical KPI values, and primary body copy.
- **JetBrains Mono** is introduced for all operational metadata requiring zero visual ambiguity: VIN identifiers, engine displacement codes, monetary units, SKU stock IDs, floor-plan interest calculations, and system timestamps.

### Typographic Discipline
- Numerical values in tables must always utilize tabular figures (`font-variant-numeric: tabular-nums`) to maintain visual alignment across high-density vehicle lists.
- Headers above 24px apply negative letter-spacing for a modern display presence.
- Uppercase styling is strictly reserved for `label-sm` technical telemetry (e.g., `VIN`, `CC`, `STATUS`, `F&I`).

## Layout & Spacing

The layout model is engineered around an asymmetric fluid system optimized for complex SaaS operations and multi-metric density.

### Grid & Layout Principles
- **Global Structure:** A fixed collapsible command sidebar (64px collapsed, 260px expanded), paired with a fluid content canvas structured upon a 12-column dynamic grid.
- **Breakpoints:**
  - `Mobile` (< 768px): Single-column stack, cards convert to flat segmented sheets, horizontal scrolling utility tabs, outer margin `1rem` (`margin-sm`).
  - `Tablet` (768px - 1199px): 8-column grid with grouped metrics, side-drawer overlays, outer margin `1.5rem`.
  - `Desktop` (1200px - 1599px): 12-column grid, split pane layouts (inventory ledger on left, inspection sheet on right), outer margin `2rem` (`margin`).
  - `Ultrawide / Command Center` (≥ 1600px): Max fluid container with sticky contextual sidecars for fast POS / F&I (Finance & Insurance) calculations, outer margin `2.5rem` (`margin-lg`).

### Spacing Rhythm
- Density is prioritized inside analytical panels: `space-xs` (4px) and `space-sm` (8px) govern tight form fields, status tags, and metric indicators.
- Canvas structural boundaries utilize `space-md` (16px) for card body padding and `space-xl` (36px) between modular functional zones (e.g., Showroom Fleet vs. Financial Pipeline).

## Elevation & Depth

Visual hierarchy is constructed through **subtle surface tiering and calibrated hairline borders**, rather than heavy drop shadows. This creates a focused, high-precision technical instrument aesthetic.

### Surface Tiers (Dark Architecture)
1. **Base Floor (`#090D16`):** The master canvas viewport.
2. **Surface Low (`#0F172A`):** Master cards, inventory tables, and data grouping panels.
3. **Surface High (`#1E293B`):** Modal drawers, floating command bars, active table row hovers, and input containers.
4. **Surface Overlay (`#26334D`):** Tooltips, dropdown overlays, and contextual popovers.

### Borders & Chromatic Highlights
- **Hairline Insets:** All elevated surfaces carry a structural 1px border colored `rgba(148, 163, 184, 0.08)`.
- **Top Edge Specular Highlight:** Important modal dialogs and active KPI cards include an inner 1px pseudo-border gradient: `linear-gradient(to right, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.02))`.
- **Elevation Shadows:**
  - *Standard Card:* `0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px -1px rgba(0, 0, 0, 0.3)`
  - *Active / Popover:* `0 10px 25px -5px rgba(0, 0, 0, 0.6), 0 8px 10px -6px rgba(0, 0, 0, 0.4)`
  - *Apex Glow:* Accent interaction nodes receive an ambient aura: `0 0 16px -2px rgba(220, 38, 38, 0.35)`.

## Shapes

The geometric signature balances industrial precision with ergonomic digital modernism.

- **Base Radius (0.5rem / 8px):** Applied to buttons, input controls, table status pills, dropdowns, and micro-cards. Gives an exact, machine-milled look.
- **Large Radius (`rounded-lg` - 1rem / 16px):** Applied to primary dashboard cards, metrics panels, modal containers, and media inspection frames.
- **Extra Large Radius (`rounded-xl` - 1.5rem / 24px):** Reserved for contextual drawers, customer-facing delivery summary sheets, and interactive onboarding stages.
- **Fully Rounded (Pill / 9999px):** Strictly constrained to numeric badges, quick-status vehicle indicators (e.g., `IN TRANSIT`, `SOLD`), and compact tag toggles.

## Components

### Buttons & Interactive Controls
- **Primary Action (Apex Velocity):** High-impact `#DC2626` background, crisp white label (`label-lg`), subtle top-edge chrome specular line, active state translation of 1px down.
- **Secondary (Titanium Frame):** Transparent background with `#1E293B` baseline border, transitioning to `#334155` on hover with a `#F8FAFC` label.
- **Tertiary / Ghost:** Ghost interaction with background shift to `rgba(255, 255, 255, 0.05)` on hover.
- **Icon Actions:** 36x36px fixed dimension with 8px radius; icon stroke width locked at 1.75px.

### Inputs & Form Fields
- Dark graphite background (`#0B111E`), bordered by `#1E293B`.
- In-focus state: Border switches immediately to `#DC2626` accompanied by a sharp `0 0 0 2px rgba(220, 38, 38, 0.20)` ring.
- Labels sit above inputs in `label-md` with secondary contrast (`#94A3B8`). Monospace values for engine displacement (cc), VIN, and currency formatting.

### High-Density Data Tables (Linear/Stripe Style)
- **Header:** Sticky `#0F172A` background, border-bottom 1px solid `#1E293B`, labels in `label-sm` uppercase JetBrains Mono with `#64748B`.
- **Row Styling:** Row height 48px standard, 38px compact mode. Border-bottom 1px solid `rgba(255, 255, 255, 0.03)`.
- **Hover Feedback:** Smooth transition to `rgba(255, 255, 255, 0.02)`.
- **Data Columns:** Numerical and ID data (mileage, VIN, pricing, stock days) right-aligned in `code-md`. Vehicle titles left-aligned in `body-md` bold.

### Status Chips & Badges
- Semi-translucent micro-pills with 1px border.
- *In Stock:* `bg-emerald-950/40 text-emerald-400 border-emerald-800/40`
- *In Negotiation / Reserved:* `bg-amber-950/40 text-amber-400 border-amber-800/40`
- *Sold / Dispatched:* `bg-slate-800/60 text-slate-300 border-slate-700/50`
- *Test Ride Scheduled:* `bg-sky-950/40 text-sky-400 border-sky-800/40`

### Inspection & Vehicle Cards
- **Header:** Display badge for motorcycle brand/model, engine displacement badge in monospace, high-res 16:9 media slot with subtle bottom gradient scrim.
- **Body:** 2-column or 3-column micro-spec layout (Mileage, Year, Margin, Days on Lot).
- **Footer:** Quick-action bar (Financing Calculator, Print Spec Sheet, Test Ride CTA).

### Diagnostic & Metric Cards (KPIs)
- Bordered modular blocks with top-right sparklines or trend arrows (`+12.4%`).
- Primary KPI metric in `headline-xl` (Plus Jakarta Sans 600), supported by small monospace timeframe markers (`VS LAST 30D`).