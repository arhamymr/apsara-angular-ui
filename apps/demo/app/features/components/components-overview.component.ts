import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

interface ComponentItem {
  id: string;
  title: string;
  icon: string;
  description?: string;
}

interface ComponentCategory {
  name: string;
  items: ComponentItem[];
}

@Component({
  selector: 'app-components-overview',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  template: `
    <div class="components-page">
      <header class="hero">
        <h1>Components</h1>
        <p>A comprehensive library of accessible, customizable, and performant UI components</p>
      </header>

      <main class="categories-container">
        @for (category of categories; track category.name) {
          <section class="category-section">
            <h2 class="category-title">{{ category.name }}</h2>
            <div class="components-grid">
              @for (item of category.items; track item.id) {
                <a [routerLink]="'/components/' + item.id" class="component-card">
                  <div class="card-icon">
                    <mat-icon>{{ item.icon }}</mat-icon>
                  </div>
                  <div class="card-content">
                    <h3 class="card-title">{{ item.title }}</h3>
                    @if (item.description) {
                      <p class="card-description">{{ item.description }}</p>
                    }
                  </div>
                  <mat-icon class="arrow-icon">arrow_forward</mat-icon>
                </a>
              }
            </div>
          </section>
        }
      </main>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    .components-page {
      min-height: 100vh;
      background: var(--background, #fafafa);
      color: var(--foreground, #1a1b1f);
    }

    .hero {
      padding: 4rem 2rem;
      text-align: center;
      background: var(--surface-container, #f5f5f5);
      border-bottom: 1px solid var(--border, #e0e0e0);
    }

    .hero h1 {
      font-size: 2.5rem;
      font-weight: 500;
      margin: 0 0 1rem;
      color: var(--foreground);
    }

    .hero p {
      font-size: 1.125rem;
      color: var(--foreground-variant, #666);
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }

    .categories-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 3rem 2rem;
    }

    .category-section {
      margin-bottom: 3.5rem;
    }

    .category-title {
      font-size: 1.25rem;
      font-weight: 500;
      color: var(--foreground);
      margin: 0 0 1.5rem;
      padding-bottom: 0.75rem;
      border-bottom: 1px solid var(--border, #e0e0e0);
    }

    .components-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1rem;
    }

    .component-card {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 1.25rem;
      background: var(--surface, #fff);
      border: 1px solid var(--border, #e0e0e0);
      border-radius: 12px;
      text-decoration: none;
      color: inherit;
      transition: all 0.2s ease;
    }

    .component-card:hover {
      border-color: var(--primary, #005cbb);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
    }

    .card-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      background: var(--surface-variant, #f0f0f0);
      border-radius: 12px;
      flex-shrink: 0;
    }

    .card-icon mat-icon {
      color: var(--primary, #005cbb);
      font-size: 24px;
      width: 24px;
      height: 24px;
    }

    .card-content {
      flex: 1;
      min-width: 0;
    }

    .card-title {
      font-size: 1rem;
      font-weight: 500;
      margin: 0 0 0.25rem;
      color: var(--foreground);
    }

    .card-description {
      font-size: 0.875rem;
      color: var(--foreground-variant, #666);
      margin: 0;
      line-height: 1.4;
    }

    .arrow-icon {
      color: var(--foreground-variant, #999);
      font-size: 20px;
      width: 20px;
      height: 20px;
      align-self: center;
      opacity: 0;
      transition: opacity 0.2s ease;
    }

    .component-card:hover .arrow-icon {
      opacity: 1;
    }
  `]
})
export class ComponentsOverviewComponent {
  categories = [
    {
      name: 'Alert',
      items: [
        { id: 'alert', title: 'Alert', icon: 'warning', description: 'Feedback and notifications' },
        { id: 'alert-action', title: 'Alert Action', icon: 'bolt', description: 'Action button for alerts' },
        { id: 'alert-description', title: 'Alert Description', icon: 'notes', description: 'Description text for alerts' },
        { id: 'alert-title', title: 'Alert Title', icon: 'title', description: 'Title text for alerts' }
      ]
    },
    {
      name: 'Form Controls',
      items: [
        { id: 'button', title: 'Button', icon: 'smart_button', description: 'Trigger actions and events' },
        { id: 'checkbox', title: 'Checkbox', icon: 'check_box', description: 'Multi-selection control' },
        { id: 'radio', title: 'Radio', icon: 'radio_button_checked', description: 'Single selection from options' },
        { id: 'slide-toggle', title: 'Slide Toggle', icon: 'toggle_on', description: 'On/off binary switch' },
        { id: 'button-toggle', title: 'Button Toggle', icon: 'toggle_button', description: 'Grouped exclusive buttons' },
        { id: 'input', title: 'Input', icon: 'text_fields', description: 'Text field for user entry' },
        { id: 'select', title: 'Select', icon: 'list', description: 'Dropdown selection control' },
        { id: 'autocomplete', title: 'Autocomplete', icon: 'autocomplete', description: 'Searchable dropdown' },
        { id: 'datepicker', title: 'Datepicker', icon: 'calendar_today', description: 'Date selection input' },
        { id: 'timepicker', title: 'Timepicker', icon: 'schedule', description: 'Time selection input' },
        { id: 'slider', title: 'Slider', icon: 'linear_scale', description: 'Range selection control' },
        { id: 'chips', title: 'Chips', icon: 'label', description: 'Compact elements selection' }
      ]
    },
    {
      name: 'Navigation',
      items: [
        { id: 'menu', title: 'Menu', icon: 'menu', description: 'Collapsible navigation list' },
        { id: 'sidenav', title: 'Sidenav', icon: 'vertical_split', description: 'Side navigation panel' },
        { id: 'toolbar', title: 'Toolbar', icon: 'toolbar', description: 'Header action bar' },
        { id: 'tabs', title: 'Tabs', icon: 'tab', description: 'Tabbed navigation' },
        { id: 'list', title: 'List', icon: 'list', description: 'Vertical list of items' },
        { id: 'paginator', title: 'Paginator', icon: 'last_page', description: 'Navigation controls for data' },
        { id: 'stepper', title: 'Stepper', icon: 'linear_scale', description: 'Progress through steps' },
        { id: 'expansion-panel', title: 'Expansion Panel', icon: 'expand_more', description: 'Collapsible content panel' }
      ]
    },
    {
      name: 'Data Display',
      items: [
        { id: 'card', title: 'Card', icon: 'crop_square', description: 'Container for content' },
        { id: 'table', title: 'Table', icon: 'table_chart', description: 'Tabular data display' },
        { id: 'tree', title: 'Tree', icon: 'account_tree', description: 'Hierarchical data structure' },
        { id: 'badge', title: 'Badge', icon: 'local_offer', description: 'Status indicator' },
        { id: 'icon', title: 'Icon', icon: 'insert_emoticon', description: 'Visual symbol representation' },
        { id: 'progress-bar', title: 'Progress Bar', icon: 'progress_bar', description: 'Linear progress indicator' },
        { id: 'spinner', title: 'Spinner', icon: 'refresh', description: 'Loading indicator' },
        { id: 'sort-header', title: 'Sort Header', icon: 'sort', description: 'Column sorting control' }
      ]
    },
    {
      name: 'Layout',
      items: [
        { id: 'divider', title: 'Divider', icon: 'horizontal_rule', description: 'Horizontal line separator' },
        { id: 'grid-list', title: 'Grid List', icon: 'grid_on', description: 'Grid-based layout' }
      ]
    },
    {
      name: 'Overlay',
      items: [
        { id: 'dialog', title: 'Dialog', icon: 'picture_in_picture_alt', description: 'Modal popup window' },
        { id: 'tooltip', title: 'Tooltip', icon: 'info', description: 'Informational tooltip' },
        { id: 'snackbar', title: 'Snackbar', icon: 'notifications', description: 'Brief notification' },
        { id: 'bottom-sheet', title: 'Bottom Sheet', icon: 'vertical_align_bottom', description: 'Slide-up panel' }
      ]
    },
    {
      name: 'Utility',
      items: [
        { id: 'ripples', title: 'Ripples', icon: 'blur_on', description: 'Ripple interaction effect' }
      ]
    }
  ];
}
