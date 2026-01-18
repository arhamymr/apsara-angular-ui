import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
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
  selector: 'app-component-doc-layout',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, MatIconModule],
  template: `
    <div class="components-layout">
      <aside class="sidebar">
        <nav class="sidebar-nav">
          <a routerLink="/components" class="back-link">
            <mat-icon>arrow_back</mat-icon>
            <span>Back to Overview</span>
          </a>
          @for (category of categories; track category.name) {
            <div class="nav-category">
              <h3 class="nav-category-title">{{ category.name }}</h3>
              <ul class="nav-list">
                @for (item of category.items; track item.id) {
                  <li>
                    <a [routerLink]="'/components/' + item.id" 
                       routerLinkActive="active"
                       class="nav-link">
                      <mat-icon class="nav-icon">{{ item.icon }}</mat-icon>
                      <span>{{ item.title }}</span>
                    </a>
                  </li>
                }
              </ul>
            </div>
          }
        </nav>
      </aside>
      <main class="content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    .components-layout {
      display: flex;
      min-height: calc(100vh - 72px);
    }

    .sidebar {
      width: 280px;
      flex-shrink: 0;
      background: var(--surface, #fff);
      border-right: 1px solid var(--border, #e0e0e0);
      overflow-y: auto;
      position: sticky;
      top: 72px;
      height: calc(100vh - 72px);
    }

    .sidebar-nav {
      padding: 1.5rem 0;
    }

    .back-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      color: var(--foreground-variant, #666);
      text-decoration: none;
      font-size: 0.875rem;
      margin-bottom: 1rem;
      transition: color 0.15s ease;
    }

    .back-link:hover {
      color: var(--primary, #005cbb);
    }

    .back-link mat-icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
    }

    .nav-category {
      margin-bottom: 1.5rem;
    }

    .nav-category-title {
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--foreground-variant, #666);
      padding: 0 1.5rem;
      margin: 0 0 0.75rem;
    }

    .nav-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .nav-link {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.625rem 1.5rem;
      color: var(--foreground, #1a1b1f);
      text-decoration: none;
      font-size: 0.875rem;
      transition: all 0.15s ease;
      border-left: 2px solid transparent;
    }

    .nav-link:hover {
      background: var(--surface-variant, #f5f5f5);
    }

    .nav-link.active {
      background: var(--primary-container, #e3f2fd);
      color: var(--primary, #005cbb);
      border-left-color: var(--primary, #005cbb);
    }

    .nav-icon {
      font-size: 20px;
      width: 20px;
      height: 20px;
      color: var(--foreground-variant, #666);
    }

    .nav-link.active .nav-icon {
      color: var(--primary, #005cbb);
    }

    .content {
      flex: 1;
      padding: 2rem;
      min-width: 0;
      background: var(--background, #fafafa);
    }
  `]
})
export class ComponentDocLayoutComponent {
  categories = [
    {
      name: 'Alert',
      items: [
        { id: 'alert', title: 'Alert', icon: 'warning' },
        { id: 'alert-action', title: 'Alert Action', icon: 'bolt' },
        { id: 'alert-description', title: 'Alert Description', icon: 'notes' },
        { id: 'alert-title', title: 'Alert Title', icon: 'title' }
      ]
    },
    {
      name: 'Form Controls',
      items: [
        { id: 'button', title: 'Button', icon: 'smart_button' },
        { id: 'checkbox', title: 'Checkbox', icon: 'check_box' },
        { id: 'radio', title: 'Radio', icon: 'radio_button_checked' },
        { id: 'slide-toggle', title: 'Slide Toggle', icon: 'toggle_on' },
        { id: 'button-toggle', title: 'Button Toggle', icon: 'toggle_button' },
        { id: 'input', title: 'Input', icon: 'text_fields' },
        { id: 'select', title: 'Select', icon: 'list' },
        { id: 'autocomplete', title: 'Autocomplete', icon: 'autocomplete' },
        { id: 'datepicker', title: 'Datepicker', icon: 'calendar_today' },
        { id: 'timepicker', title: 'Timepicker', icon: 'schedule' },
        { id: 'slider', title: 'Slider', icon: 'linear_scale' },
        { id: 'chips', title: 'Chips', icon: 'label' }
      ]
    },
    {
      name: 'Navigation',
      items: [
        { id: 'menu', title: 'Menu', icon: 'menu' },
        { id: 'sidenav', title: 'Sidenav', icon: 'vertical_split' },
        { id: 'toolbar', title: 'Toolbar', icon: 'toolbar' },
        { id: 'tabs', title: 'Tabs', icon: 'tab' },
        { id: 'list', title: 'List', icon: 'list' },
        { id: 'paginator', title: 'Paginator', icon: 'last_page' },
        { id: 'stepper', title: 'Stepper', icon: 'linear_scale' },
        { id: 'expansion-panel', title: 'Expansion Panel', icon: 'expand_more' }
      ]
    },
    {
      name: 'Data Display',
      items: [
        { id: 'card', title: 'Card', icon: 'crop_square' },
        { id: 'table', title: 'Table', icon: 'table_chart' },
        { id: 'tree', title: 'Tree', icon: 'account_tree' },
        { id: 'badge', title: 'Badge', icon: 'local_offer' },
        { id: 'icon', title: 'Icon', icon: 'insert_emoticon' },
        { id: 'progress-bar', title: 'Progress Bar', icon: 'progress_bar' },
        { id: 'spinner', title: 'Spinner', icon: 'refresh' },
        { id: 'sort-header', title: 'Sort Header', icon: 'sort' }
      ]
    },
    {
      name: 'Layout',
      items: [
        { id: 'divider', title: 'Divider', icon: 'horizontal_rule' },
        { id: 'grid-list', title: 'Grid List', icon: 'grid_on' }
      ]
    },
    {
      name: 'Overlay',
      items: [
        { id: 'dialog', title: 'Dialog', icon: 'picture_in_picture_alt' },
        { id: 'tooltip', title: 'Tooltip', icon: 'info' },
        { id: 'snackbar', title: 'Snackbar', icon: 'notifications' },
        { id: 'bottom-sheet', title: 'Bottom Sheet', icon: 'vertical_align_bottom' }
      ]
    },
    {
      name: 'Utility',
      items: [
        { id: 'ripples', title: 'Ripples', icon: 'blur_on' }
      ]
    }
  ];
}
