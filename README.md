# NorthByte Restaurant Template

<div align="center">
<img width="1200" height="475" alt="Restaurant landing page preview" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

NorthByte is a high-end restaurant landing page template built with React, Vite, TypeScript, and Motion. It is designed to feel like a polished hospitality site out of the box while staying easy to rebrand through a central configuration file.

## About The Project

This template presents a full restaurant experience as a single-page site with a premium editorial style. The app is driven by reusable sections and a restaurant config system, so the entire brand can be swapped without rewriting the layout.

The current implementation includes:

- a cinematic hero section with rotating imagery and booking calls to action
- configurable menu, signature dishes, gallery, chef story, testimonials, and contact sections
- a reservation form with dish interest prefill
- sticky actions for quick booking and navigation
- a theme selector for switching between built-in restaurant presets
- dynamic section tracking in the navbar for smooth in-page navigation

## Tech Stack

- React 19
- TypeScript
- Vite
- Motion
- Lucide React icons
- Tailwind CSS 4

## Getting Started

### Prerequisites

- Node.js

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

The app runs on `http://localhost:3000`.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project Structure

- `src/App.tsx` wires the page sections together and manages theme, navigation, and booking state.
- `src/config/restaurant.config.ts` contains the restaurant presets and the default configuration.
- `src/components/` contains the individual landing page sections.
- `src/types.ts` defines the shared data model for the restaurant configuration.

## Customization

To change the restaurant identity, edit `src/config/restaurant.config.ts`. The template is built around a config-first approach, so updating the name, colors, hero text, menu items, testimonials, contact details, and SEO metadata will flow through the entire site.

The theme selector already includes multiple preset brands, and the default restaurant can be changed by updating the exported `defaultRestaurantConfig` value.

## Scripts

- `npm run dev` starts the Vite development server.
- `npm run build` creates a production build.
- `npm run preview` serves the production build locally.
- `npm run lint` runs the TypeScript check.
- `npm run clean` removes generated build output.

## Notes

- The project currently does not require a local environment file to run.
- All content is template-driven and can be replaced with your own restaurant copy, imagery, and branding.
