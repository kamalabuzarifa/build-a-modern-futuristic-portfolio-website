# Frontend Architecture

## Technology Stack

- React + Vite + TypeScript
- Tailwind CSS
- Framer Motion
- Three.js + React Three Fiber

## App Structure

- `src/App.tsx`: Global state (theme, language, parallax), layout orchestration.
- `src/content.ts`: Centralized content model (English + Arabic).
- `src/components/*`: Reusable UI blocks and sections.

## Reusable Components

- `GlassCard`: Glassmorphism card shell.
- `SectionTitle`: Animated section heading.
- `ParticleBackground`: Floating animated particles.
- `ThreeOrb`: Interactive 3D visual object.
- `TypingText`: Hero typing animation.

## UX/Design Features

- Dark cyberpunk visual identity with neon accents.
- Light mode alternative.
- Mouse-based parallax glow.
- Scroll-triggered reveal animations.
- Responsive navigation and section layouts.

## Accessibility

- Semantic sectioning (`header`, `main`, `section`, `footer`).
- Keyboard focus visibility via browser defaults and contrast-safe colors.
- Skip link for keyboard users.
- `dir` and `lang` switching for Arabic/English support.
