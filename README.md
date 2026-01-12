# Angular Starter Project

A modern Angular 21+ boilerplate with signals, standalone components, Material 3, and best practices for building scalable web applications.

## Why This Starter

- Latest Angular 21.0.5 with signals and standalone components
- OnPush change detection for performance
- Angular Material 3 + Tailwind CSS integration
- Vitest setup with examples
- Feature-based architecture with lazy loading
- Production-ready structure and patterns

## Tech Stack

- Angular 21.0.5
- TypeScript 5.9.2
- RxJS 7.8.0
- Angular Material 21.0.6
- Tailwind CSS 4.1.12
- SCSS
- Vitest 4.0.8
- Angular CLI 21.0.5

## Project Structure

```
src/
├── app/
│   ├── core/              # Singleton services, models, interceptors
│   ├── features/          # Lazy-loaded feature modules
│   ├── shared/            # Reusable components, pipes, directives, UI library
│   ├── app.config.ts      # App configuration
│   ├── app.routes.ts      # Route definitions
│   └── app.ts             # Root component
├── material-theme.scss    # Angular Material theming
├── styles.css             # Global styles
└── index.html             # Entry HTML
```

## Quick Start

```bash
# Clone the repository
git clone https://github.com/your-username/angular-starter-project.git
cd angular-starter-project

# Install dependencies
npm install

# Start development server
ng serve

# Build for production
ng build

# Run tests
ng test

# Run tests with coverage
ng test --coverage
```

## Key Patterns

- **Signals** — Reactive state management with `signal()`, `computed()`
- **Standalone Components** — No NgModules, fully standalone
- **Modern Control Flow** — `@if`, `@for`, `@switch` syntax
- **Lazy Loading** — All feature modules are lazy-loaded
- **OnPush Change Detection** — Optimized change detection strategy
- **Functional Interceptors** — HTTP interceptors as functions
- **inject()** — Function-based dependency injection

## Scripts

- `ng serve` — Start development server
- `ng build` — Build for production
- `ng test` — Run unit tests
- `ng test --coverage` — Run tests with coverage report

## License

MIT
