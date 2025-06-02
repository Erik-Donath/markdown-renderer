# Markdown Renderer

[![GitHub Pages](https://img.shields.io/badge/demo-online-green)](https://erik-donath.github.io/markdown-renderer/)

A Markdown Renderer hosted on GitHub Pages.

## Overview

This project is a web-based Markdown renderer built with React and Vite. It allows users to input or load Markdown content and view the rendered output in real time. It supports math syntax via `micromark-extension-math` and offers a modern, responsive interface thanks to Tailwind CSS.

## Features

- **Live Markdown Rendering:** Instantly see formatted output as you type.
- **Math Support:** Render inline and block-level math expressions.
- **Modern UI:** Styled using Tailwind CSS and icon support via Lucide.
- **Component-based:** Built with reusable React components.
- **Easy Deployment:** Designed to be hosted on GitHub Pages.

## Demo
Visit: [https://erik-donath.github.io/markdown-renderer/](https://erik-donath.github.io/markdown-renderer/)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Erik-Donath/markdown-renderer.git
cd markdown-renderer
npm install
```

### Running Locally

To start the development server:

```bash
npm run dev
```

Visit `http://localhost:5173` (or as specified in your terminal) to view the app.

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

- `src/` - Application source code
  - `App.tsx` - Main application component
  - `MarkdownBlock.tsx` - Markdown rendering logic
  - `TooltipButton.tsx` - UI utility component
  - `main.jsx` - Application entry point
  - `index.css` - Global styles
- `public/` - Static assets (if present)
- `index.html` - Main HTML template
- `vite.config.js` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `.github/` - GitHub-specific files and workflows
- `.vscode/` - VSCode editor settings
- `eslint.config.js` - Linting configuration

## Dependencies

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [micromark](https://github.com/micromark/micromark) & [micromark-extension-math](https://github.com/micromark/micromark-extension-math)
- [Lucide React](https://lucide.dev/)

## Scripts

- `npm run dev` - Start local development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

This project is licensed under the terms of the [LICENSE](LICENSE) file.
