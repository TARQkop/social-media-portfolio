# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  # VYRA

  <p align="center">
    <img src="public/icon/images.png" alt="VYRA logo" width="120" />
  </p>

  <p align="center">
    <strong>Social media. Creative direction. Brand presence.</strong><br />
    A focused portfolio experience for bold ideas and memorable digital identities.
  </p>

  ## About

  VYRA is a responsive creative portfolio built around a clear editorial visual system. It presents selected work, services, client voices, and a direct contact flow in a polished single-page experience.

  ## Highlights

  - Responsive layouts for desktop, tablet, and mobile.
  - Light and dark themes with saved user preference.
  - Glass-style mobile navigation with accessible controls.
  - Animated hero, work gallery, service cards, and testimonial carousel.
  - Contact form with social links for Instagram, Telegram, and WhatsApp.
  - VYRA branding in the browser title, favicon, and link preview metadata.

  ## Stack

  - React 19
  - TypeScript
  - Vite
  - Tailwind CSS
  - ESLint

  ## Getting Started

  ### Requirements

  - Node.js 20 or newer
  - npm

  ### Install and run

  ```bash
  npm install
  npm run dev
  ```

  The development server is available at `http://localhost:5173` unless Vite selects another port.

  ## Scripts

  | Command | Purpose |
  | --- | --- |
  | `npm run dev` | Start the development server |
  | `npm run lint` | Check code quality with ESLint |
  | `npm run build` | Create a production build |
  | `npm run preview` | Preview the production build locally |

  ## Project Structure

  ```text
  src/
    components/
      layout/       Navigation
      sections/     Hero, work, services, testimonials, contact
    data/           Testimonial content
    hooks/          Scroll reveal behavior
    App.tsx         Page composition
    index.css       Global styles and motion
  public/
    icon/           VYRA brand mark
    svg/            Service icons
  ```

  ## Theme

  The interface opens in dark mode by default. Visitors can switch themes from the navigation bar, and their preference is stored locally in the browser.

  ## License

  This project is a personal portfolio experience. Replace the contact links and testimonial content with your own details before publishing.
