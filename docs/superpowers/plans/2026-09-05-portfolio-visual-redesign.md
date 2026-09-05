# Portfolio Visual Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the existing portfolio into a more visual editorial portfolio while preserving the current Business · Product · AI · Global content and real project assets.

**Architecture:** Keep the current React 18 CDN + Babel + Tailwind CDN setup and the existing global data objects. Replace section presentation components rather than rebuilding the data layer. Add reusable visual treatments in `tokens.css`, keep real media files already committed under `assets/`, and validate through a Vercel preview before touching `main`.

**Tech Stack:** React 18 CDN, Babel Standalone, Tailwind CDN, CSS design tokens, static Vercel hosting.

**Spec:** `docs/superpowers/specs/2026-09-05-portfolio-visual-redesign-design.md`

## Global Constraints

- Preserve current KO/EN language switching.
- Preserve current `PROJECTS`, `EXPERIENCES`, `SKILLS`, and `LANGUAGES` data shapes.
- Use only committed real project/profile/event media for content visuals.
- Decorative UI assets may be implemented with CSS/SVG.
- Keep Trust Blue as the core palette.
- Do not migrate frameworks or add a build system.
- Do not update `main` until preview verification is complete.

---

### Task 1: Hero editorial redesign

**Files:**
- Modify: `sections/hero.jsx`
- Modify: `tokens.css`

**Interfaces:**
- Consumes: `COPY.hero`, `STATS`, `useLanguage`, `Pill`, `Icon`
- Produces: redesigned `window.Hero`

- [ ] Replace the hobby-expansion interaction with a stable two-column hero.
- [ ] Add CSS orbit/globe decoration around the real `assets/profile-nobg.png`.
- [ ] Add Product / Operations / Global / AI floating proof panels.
- [ ] Reduce visible keywords to four high-signal items.
- [ ] Convert four independent stat cards into one connected proof strip.
- [ ] Confirm the hero collapses to one column below 768px.

### Task 2: Featured Work editorial layouts

**Files:**
- Modify: `sections/projects.jsx`
- Modify: `tokens.css`

**Interfaces:**
- Consumes: `PROJECTS`, `useLanguage`, `Pill`, `Icon`
- Produces: redesigned `window.ProjectsSection`

- [ ] Replace generic `ProjectCard` with a Date-navi-specific editorial split using real app screenshots/video.
- [ ] Present Problem / Solution / Impact as short scan blocks derived from existing `sections` data.
- [ ] Show Date-navi metrics prominently and create CSS device frames.
- [ ] Create a mirrored Next Challenge layout using the committed admin/automation/Figma images.
- [ ] Preserve the live website CTA when `p.url` exists.
- [ ] Keep detailed existing project information accessible in a compact expandable area.

### Task 3: Experience hierarchy redesign

**Files:**
- Modify: `sections/experience.jsx`
- Modify: `tokens.css`

**Interfaces:**
- Consumes: `EXPERIENCES`, `COPY.sections.experience`, `useLanguage`, `Pill`
- Produces: redesigned `window.ExperienceSection`

- [ ] Promote `paris-2024` to a large image-led featured experience.
- [ ] Overlay 20+ VIP/day, Korea House, and Global Operations proof points.
- [ ] Render Next Challenge, HUFS Marathon, and NEOMA as compact supporting experiences.
- [ ] Keep all existing experience copy available without repeating the same card composition.

### Task 4: Capabilities redesign

**Files:**
- Modify: `sections/skills.jsx`
- Modify: `tokens.css`

**Interfaces:**
- Consumes: `SKILLS`, `LANGUAGES`, `COPY.sections.skills`, `useLanguage`, `Pill`, `Icon`
- Produces: redesigned `window.SkillsSection`

- [ ] Create four capability pillars: Product Planning, Business Operations, AI Workflow Design, Global Communication.
- [ ] Separate a compact `Tools I use` area from capability descriptions.
- [ ] Remove language percentage bars and show text proficiency only.
- [ ] Show App Store, Paris 2024, 5 Sponsors, and 100+ Startups as proof highlights.

### Task 5: Closing CTA redesign

**Files:**
- Modify: `sections/contact.jsx`
- Modify: `tokens.css`

**Interfaces:**
- Consumes: `PROFILE`, `COPY.sections.contact`, `useLanguage`, `Icon`
- Produces: redesigned `window.ContactSection`

- [ ] Replace the two-card contact layout with one large closing CTA panel.
- [ ] Present Email / Phone / LinkedIn as compact contact rows.
- [ ] Render current availability as `즉시 근무 가능` / `Available immediately` without exposing stale 2026.06 copy.
- [ ] Keep the role focus and location visible in a concise footer status line.

### Task 6: Verification and preview

**Files:**
- Modify: `PLAN.md`
- Modify: `RESULT.md`

**Interfaces:**
- Consumes: completed section changes
- Produces: preview-ready branch and verification record

- [ ] Run syntax checks on edited JSX/CSS through available static validation.
- [ ] Check branch diff for unintended content deletions.
- [ ] Wait for or trigger a Vercel preview deployment for `feat/portfolio-visual-redesign`.
- [ ] Verify desktop, tablet, and mobile rendering plus KO/EN switching.
- [ ] Verify Date-navi video/screenshots, Next Challenge images, and Paris image load.
- [ ] Record preview URL and remaining issues in `RESULT.md`.
- [ ] Keep `main` unchanged until user approves the preview.
