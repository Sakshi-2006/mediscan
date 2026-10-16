# Mediscan

Mediscan is a modern medical imaging dashboard and AI model workspace built with Next.js and TypeScript. It is designed to help teams review medical image datasets, monitor model performance, and explore experiment pipelines for diagnostic analysis.

Live demo: https://sentinel-yh.vercel.app/

## Overview

This project presents a polished interface for a medical imaging workflow, including:

- dataset and preprocessing pipeline tracking
- model training and experiment status monitoring
- evaluation metrics and diagnostic insights
- a responsive dashboard for healthcare and AI research workflows

The application is built as a frontend-focused product for visualizing a medical AI project lifecycle and is primarily developed in TypeScript with styling handled through CSS and Tailwind utilities.

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Vercel Analytics

Language composition:

- TypeScript: 78.1%
- CSS: 20.7%
- JavaScript: 1.2%

## Project structure

- `app/` - application pages and global layout
- `components/` - reusable UI components
- `lib/` - utility and helper logic
- `public/` - static assets
- `package.json` - project scripts and dependencies
- `next.config.mjs` - Next.js configuration

## Getting started

This repository uses pnpm as the package manager.

### Prerequisites

- Node.js 18 or newer
- pnpm

### Install dependencies

```bash
git clone https://github.com/Sakshi-2006/mediscan.git
cd mediscan
pnpm install
```

### Run locally

```bash
pnpm dev
```

Then open http://localhost:3000 in your browser.

## Available scripts

```bash
pnpm dev
pnpm build
pnpm start
```

- `pnpm dev` starts the development server
- `pnpm build` creates a production build
- `pnpm start` runs the production build locally

## Deployment

This app is configured for deployment on Vercel. The project also includes the standard Next.js build configuration required for deployment on modern hosting platforms.

To deploy:

1. Connect the GitHub repository to Vercel.
2. Import the project and configure the framework as Next.js.
3. Deploy the app using the repository default settings.

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository.
2. Create a feature branch.
3. Make your changes and commit them with a clear message.
4. Open a pull request with a short description of the update.

## License

This repository does not currently include a license file. Add a LICENSE file if you want to define the project's open-source usage terms.

## Contact

For questions or support, visit the repository on GitHub:

https://github.com/Sakshi-2006/mediscan
