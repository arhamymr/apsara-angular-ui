import { Component, signal, inject, ElementRef, ViewChildren, QueryList, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from '@shared/ui/card';
import { DocsSidebarComponent, DocsNavItem } from './components/docs-sidebar';

@Component({
  selector: 'app-docs',
  imports: [CommonModule, MatIconModule, CardComponent, DocsSidebarComponent],
  template: `
    <div class="docs-page">
        <app-docs-sidebar
          [items]="navItems()"
          [activeId]="activeSection()"
          [isCollapsed]="sidebarCollapsed()"
          (navigate)="scrollToSection($event)" />
      
      <main class="docs-content" [class.sidebar-collapsed]="sidebarCollapsed()">
        <header class="docs-header">
          <div class="header-content">
            <h1>Angular Dev Starter</h1>
            <p class="version">v21.0.5</p>
          </div>
          <p class="description">
            A modern Angular 21+ boilerplate with signals, standalone components, Material 3, 
            and a comprehensive UI component library for building scalable web applications.
          </p>
        </header>

        <section #sectionRef id="overview" class="doc-section">
          <app-card variant="elevated" header="Overview" class="doc-card">
            <p>
              This boilerplate provides a production-ready foundation for building Angular applications 
              with modern best practices. It includes everything you need to start developing quickly: 
              a comprehensive component library, state management with signals, lazy-loaded routes, 
              and Material 3 theming.
            </p>
            <div class="features-grid">
              <div class="feature-item">
                <mat-icon>signal_cellular_alt</mat-icon>
                <span>Angular Signals</span>
              </div>
              <div class="feature-item">
                <mat-icon>extension</mat-icon>
                <span>Standalone Components</span>
              </div>
              <div class="feature-item">
                <mat-icon>palette</mat-icon>
                <span>Material 3</span>
              </div>
              <div class="feature-item">
                <mat-icon>speed</mat-icon>
                <span>OnPush Change Detection</span>
              </div>
            </div>
          </app-card>
        </section>

        <section #sectionRef id="tech-stack" class="doc-section">
          <app-card variant="elevated" header="Tech Stack" class="doc-card">
            <table class="tech-table">
              <thead>
                <tr>
                  <th>Technology</th>
                  <th>Version</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>Angular</code></td>
                  <td>21.0.5</td>
                  <td>Core framework with signals and standalone components</td>
                </tr>
                <tr>
                  <td><code>TypeScript</code></td>
                  <td>5.9.2</td>
                  <td>Type-safe development experience</td>
                </tr>
                <tr>
                  <td><code>RxJS</code></td>
                  <td>7.8.0</td>
                  <td>Reactive programming and async operations</td>
                </tr>
                <tr>
                  <td><code>Angular Material</code></td>
                  <td>21.0.6</td>
                  <td>Material Design 3 components and theming</td>
                </tr>
                <tr>
                  <td><code>Tailwind CSS</code></td>
                  <td>4.1.12</td>
                  <td>Utility-first CSS framework</td>
                </tr>
                <tr>
                  <td><code>SCSS</code></td>
                  <td>-</td>
                  <td>Component-level styling with variables</td>
                </tr>
                <tr>
                  <td><code>Vitest</code></td>
                  <td>4.0.8</td>
                  <td>Fast unit testing framework</td>
                </tr>
                <tr>
                  <td><code>Angular CLI</code></td>
                  <td>21.0.5</td>
                  <td>Build tool and development server</td>
                </tr>
              </tbody>
            </table>
          </app-card>
        </section>

        <section #sectionRef id="structure" class="doc-section">
          <app-card variant="elevated" header="Project Structure" class="doc-card">
            <pre class="structure-tree">src/
├── app/
│   ├── core/                    # Singleton services, models, interceptors
│   │   ├── models/              # TypeScript interfaces and types
│   │   └── services/            # Singleton services (API, auth, etc.)
│   ├── features/                # Lazy-loaded feature modules
│   │   ├── home/                # Home page
│   │   ├── about/               # About page
│   │   ├── users/               # Users page
│   │   ├── settings/            # Settings page
│   │   ├── auth/                # Authentication feature
│   │   ├── docs/                # Documentation page (this page)
│   │   └── components-showcase/ # Component documentation
│   │       ├── components/      # Section components (button, input, etc.)
│   │       ├── components-showcase.component.ts
│   │       └── components-showcase.routes.ts
│   ├── shared/                  # Reusable components and UI library
│   │   ├── ui/                  # UI component library
│   │   │   ├── button/          # Button component
│   │   │   ├── input/           # Input component
│   │   │   ├── card/            # Card component
│   │   │   └── menu/            # Menu component
│   │   ├── components/          # Shared components (navbar, code-snippet)
│   │   └── index.ts             # Barrel exports
│   ├── app.config.ts            # App configuration
│   ├── app.routes.ts            # Route definitions
│   ├── app.ts                   # Root component
│   └── app.html                 # Root template
├── material-theme.scss          # Angular Material theming
├── styles.css                   # Global styles
├── styles/
│   ├── theme.css                # Custom theme overrides
│   ├── variables.css            # Theme tokens (CSS variables)
│   ├── _colors.scss             # Color utilities
│   ├── _globals.scss            # Global styles
│   ├── _mixins.scss             # SCSS mixins
│   ├── _spacing.scss            # Spacing scale
│   └── _typography.scss         # Typography system
├── public/                      # Static assets
├── angular.json                 # Angular CLI configuration
├── package.json                 # Dependencies and scripts
└── tsconfig.json                # TypeScript configuration</pre>
          </app-card>
        </section>

        <section #sectionRef id="components" class="doc-section">
          <app-card variant="elevated" header="UI Component Library" class="doc-card">
            <p class="section-intro">
              This starter includes a comprehensive reusable UI component library with 14+ components 
              designed for consistency and developer experience.
            </p>
            
            <h4>Available Components</h4>
            <div class="component-categories">
              <div class="category">
                <h5>Form Controls</h5>
                <ul>
                  <li><code>ButtonComponent</code> - Versatile button with variants, sizes, and states</li>
                  <li><code>InputComponent</code> - Text input with validation and icons</li>
                  <li><code>CheckboxComponent</code> - Material-style checkbox</li>
                  <li><code>TextareaComponent</code> - Multi-line text input</li>
                  <li><code>SelectComponent</code> - Dropdown selection</li>
                  <li><code>RadioComponent</code> - Radio button group</li>
                  <li><code>SwitchComponent</code> - Toggle switch</li>
                </ul>
              </div>
              
              <div class="category">
                <h5>Layout</h5>
                <ul>
                  <li><code>CardComponent</code> - Content container with variants</li>
                  <li><code>ToolbarComponent</code> - Top toolbar component</li>
                  <li><code>SidenavComponent</code> - Side navigation panel</li>
                </ul>
              </div>
              
              <div class="category">
                <h5>Navigation</h5>
                <ul>
                  <li><code>MenuComponent</code> - Dropdown menu with nested items</li>
                </ul>
              </div>
              
              <div class="category">
                <h5>Popups & Modals</h5>
                <ul>
                  <li><code>DialogComponent</code> - Modal dialog</li>
                  <li><code>SnackbarComponent</code> - Toast notifications</li>
                </ul>
              </div>
              
              <div class="category">
                <h5>Data Table</h5>
                <ul>
                  <li><code>TableComponent</code> - Data grid with sorting</li>
                </ul>
              </div>
            </div>
          </app-card>
        </section>

        <section #sectionRef id="patterns" class="doc-section">
          <app-card variant="elevated" header="Key Angular Patterns" class="doc-card">
            <h4>Signals for State Management</h4>
            <p>Use signals for reactive state management with computed values and effects.</p>
            <p>See <code>README.md</code> for detailed code examples.</p>

            <h4>Standalone Components</h4>
            <p>Components are standalone by default, eliminating the need for NgModules.</p>
            <p>See <code>README.md</code> for detailed code examples.</p>

            <h4>Modern Control Flow</h4>
            <p>Use the new control flow syntax: <code>&#64;if</code>, <code>&#64;for</code>, <code>&#64;switch</code>.</p>
            <p>See <code>README.md</code> for detailed code examples.</p>

            <h4>Lazy Loading Routes</h4>
            <p>Features are lazy-loaded for optimal performance.</p>
            <p>See <code>README.md</code> for detailed code examples.</p>
          </app-card>
        </section>

        <section #sectionRef id="theming" class="doc-section">
          <app-card variant="elevated" header="Theming System" class="doc-card">
            <p>
              This project uses CSS custom properties (CSS variables) for easy theming, inspired by shadcn/ui.
            </p>
            
            <h4>Theme Structure</h4>
            <pre class="file-structure">src/
├── styles.css           # Entry point (DO NOT EDIT)
├── styles/
│   ├── variables.css    # Base theme tokens (DO NOT EDIT)
│   └── theme.css        # Your custom overrides (EDIT THIS)</pre>

            <h4>Available CSS Variables</h4>
            <div class="token-categories">
              <div class="token-category">
                <h5>Colors</h5>
                <p><code>--color-primary-*</code>, <code>--color-accent-*</code>, <code>--color-success-*</code>, <code>--color-warning-*</code>, <code>--color-error-*</code>, <code>--color-gray-*</code>, <code>--color-surface*</code>, <code>--color-on-*</code></p>
              </div>
              <div class="token-category">
                <h5>Spacing</h5>
                <p><code>--spacing-0</code> through <code>--spacing-24</code></p>
              </div>
              <div class="token-category">
                <h5>Border Radius</h5>
                <p><code>--radius-sm</code>, <code>--radius-md</code>, <code>--radius-lg</code>, <code>--radius-xl</code></p>
              </div>
              <div class="token-category">
                <h5>Shadows</h5>
                <p><code>--shadow-1</code> through <code>--shadow-6</code>, <code>--shadow-elevated</code>, <code>--shadow-popover</code></p>
              </div>
              <div class="token-category">
                <h5>Typography</h5>
                <p><code>--font-family-*</code>, <code>--font-size-xs</code> through <code>--font-size-4xl</code>, <code>--font-weight-*</code></p>
              </div>
            </div>
          </app-card>
        </section>

        <section #sectionRef id="scripts" class="doc-section">
          <app-card variant="elevated" header="Available Scripts" class="doc-card">
            <table class="scripts-table">
              <thead>
                <tr>
                  <th>Command</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>ng serve</code> or <code>npm start</code></td>
                  <td>Start development server on port 4200</td>
                </tr>
                <tr>
                  <td><code>ng build</code></td>
                  <td>Build for production with optimization</td>
                </tr>
                <tr>
                  <td><code>ng build --configuration development</code></td>
                  <td>Build for development with source maps</td>
                </tr>
                <tr>
                  <td><code>ng test</code></td>
                  <td>Run unit tests with Vitest</td>
                </tr>
                <tr>
                  <td><code>ng test --coverage</code></td>
                  <td>Run tests with coverage report</td>
                </tr>
                <tr>
                  <td><code>ng test --watch</code></td>
                  <td>Run tests in watch mode</td>
                </tr>
              </tbody>
            </table>
          </app-card>
        </section>

        <section #sectionRef id="browser-support" class="doc-section">
          <app-card variant="elevated" header="Browser Support" class="doc-card">
            <ul class="browser-list">
              <li><mat-icon>check</mat-icon> Chrome (latest)</li>
              <li><mat-icon>check</mat-icon> Firefox (latest)</li>
              <li><mat-icon>check</mat-icon> Safari (latest)</li>
              <li><mat-icon>check</mat-icon> Edge (latest)</li>
            </ul>
          </app-card>
        </section>

        <section #sectionRef id="resources" class="doc-section">
          <app-card variant="elevated" header="Resources" class="doc-card">
            <p>For detailed code examples and advanced usage, refer to these resources:</p>
            <ul class="resources-list">
              <li><mat-icon>description</mat-icon> <a href="https://github.com/your-repo/angular-dev-starter" target="_blank">README.md</a> - Comprehensive documentation</li>
              <li><mat-icon>code</mat-icon> <a href="/components">Component Showcase</a> - Live examples of all UI components</li>
              <li><mat-icon>link</mat-icon> <a href="https://angular.dev" target="_blank">Angular Documentation</a> - Official Angular docs</li>
              <li><mat-icon>link</mat-icon> <a href="https://material.angular.io" target="_blank">Angular Material</a> - Material Design components</li>
            </ul>
          </app-card>
        </section>

        <footer class="docs-footer">
          <p>Angular Dev Starter - MIT License</p>
        </footer>
      </main>
    </div>
  `,
  styles: [`
    .docs-page {
      display: flex;
      min-height: 100vh;
      background: #f5f5f5;
    }

    .docs-content {
      flex: 1;
      margin-left: 0;
      transition: margin-left 0.2s ease;
    }

    .docs-content.sidebar-collapsed {
      margin-left: 0;
    }

    .docs-header {
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      color: white;
      padding: 3rem 2rem;
    }

    .header-content {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .docs-header h1 {
      font-size: 2.5rem;
      font-weight: 700;
      margin: 0;
    }

    .version {
      background: rgba(255, 255, 255, 0.2);
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.875rem;
    }

    .description {
      font-size: 1.125rem;
      opacity: 0.9;
      max-width: 800px;
      margin: 0 auto;
      line-height: 1.6;
      text-align: center;
    }

    .doc-section {
      padding: 2rem;
      max-width: 1200px;
    }

    .doc-card {
      width: 100%;
    }

    .section-intro {
      margin-bottom: 1.5rem;
      color: #49454f;
      line-height: 1.6;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1rem;
      margin-top: 1.5rem;
    }

    .feature-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem;
      background: #f5f5f5;
      border-radius: 8px;
    }

    .tech-table, .scripts-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1rem;
    }

    .tech-table th, .tech-table td,
    .scripts-table th, .scripts-table td {
      text-align: left;
      padding: 0.75rem 1rem;
      border-bottom: 1px solid #e0e0e0;
    }

    .tech-table th, .scripts-table th {
      background: #f5f5f5;
      font-weight: 600;
      color: #49454f;
    }

    code {
      background: #f0f0f0;
      padding: 0.125rem 0.375rem;
      border-radius: 4px;
      font-family: 'JetBrains Mono', 'Fira Code', monospace;
      font-size: 0.875em;
    }

    .structure-tree {
      background: #1a1a2e;
      color: #e0e0e0;
      padding: 1.5rem;
      border-radius: 8px;
      overflow-x: auto;
      font-size: 0.875rem;
      line-height: 1.6;
      white-space: pre;
    }

    .file-structure {
      background: #f5f5f5;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      overflow-x: auto;
      font-size: 0.875rem;
      line-height: 1.6;
      margin: 1rem 0;
      white-space: pre;
    }

    .component-categories {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-top: 1rem;
    }

    .category h5 {
      color: #1976d2;
      margin: 0 0 0.75rem 0;
      font-size: 1rem;
    }

    .category ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .category li {
      padding: 0.5rem 0;
      border-bottom: 1px solid #f0f0f0;
      font-size: 0.875rem;
    }

    .token-categories {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-top: 1rem;
    }

    .token-category {
      background: #f5f5f5;
      padding: 1rem;
      border-radius: 8px;
    }

    .token-category h5 {
      margin: 0 0 0.5rem 0;
      color: #49454f;
    }

    .token-category p {
      margin: 0;
      font-size: 0.875rem;
      color: #757575;
    }

    h4 {
      color: #1a1a2e;
      margin: 1.5rem 0 1rem 0;
      font-size: 1.25rem;
    }

    h4:first-child {
      margin-top: 0;
    }

    .browser-list {
      list-style: none;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 0.75rem;
    }

    .browser-list li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .browser-list mat-icon {
      color: #4caf50;
      font-size: 20px;
      width: 20px;
      height: 20px;
    }

    .resources-list {
      list-style: none;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .resources-list li {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .resources-list mat-icon {
      color: #1976d2;
      font-size: 20px;
      width: 20px;
      height: 20px;
    }

    .resources-list a {
      color: #1976d2;
      text-decoration: none;
    }

    .resources-list a:hover {
      text-decoration: underline;
    }

    .docs-footer {
      background: #1a1a2e;
      color: white;
      text-align: center;
      padding: 2rem;
      margin-top: 2rem;
    }

    .docs-footer p {
      margin: 0;
      opacity: 0.8;
    }

    @media (max-width: 768px) {
      .docs-page {
        flex-direction: column;
      }

      .doc-section {
        padding: 1rem;
      }

      .docs-header h1 {
        font-size: 1.75rem;
      }

      .description {
        font-size: 1rem;
      }
    }
  `]
})
export class DocsComponent implements AfterViewInit {
  @ViewChildren('sectionRef') sections!: QueryList<ElementRef<HTMLElement>>;

  navItems = signal<DocsNavItem[]>([
    { id: 'overview', label: 'Overview', icon: 'info' },
    { id: 'tech-stack', label: 'Tech Stack', icon: 'stack' },
    { id: 'structure', label: 'Structure', icon: 'folder' },
    { id: 'components', label: 'Components', icon: 'extension' },
    { id: 'patterns', label: 'Patterns', icon: 'pattern' },
    { id: 'theming', label: 'Theming', icon: 'palette' },
    { id: 'scripts', label: 'Scripts', icon: 'code' },
    { id: 'browser-support', label: 'Browser Support', icon: 'browser' },
    { id: 'resources', label: 'Resources', icon: 'link' },
  ]);

  activeSection = signal<string>('overview');
  sidebarCollapsed = signal<boolean>(false);

  private observer: IntersectionObserver | null = null;

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver(): void {
    const options = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection.set(entry.target.id);
        }
      });
    }, options);

    this.sections.forEach(section => {
      if (section.nativeElement) {
        this.observer?.observe(section.nativeElement);
      }
    });
  }

  scrollToSection(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.activeSection.set(id);
    }
  }
}
