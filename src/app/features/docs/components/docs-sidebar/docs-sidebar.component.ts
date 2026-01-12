import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

export interface DocsNavItem {
  id: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-docs-sidebar',
  imports: [CommonModule, MatIconModule, MatButtonModule],
  template: `
    <aside class="sidebar" [class.collapsed]="collapsed">
      <div class="sidebar-header">
        <button class="toggle-btn" (click)="toggleCollapse()"           [attr.aria-label]="collapsed ? 'Expand sidebar' : 'Collapse sidebar'">
          <mat-icon>{{ collapsed ? 'chevron_right' : 'chevron_left' }}</mat-icon>
        </button>
      </div>
      
      <nav class="sidebar-nav">
        <ul class="nav-list">
          @for (item of items(); track item.id) {
            <li class="nav-item">
              <button 
                class="nav-link" 
                [class.active]="activeId() === item.id"
                (click)="onNavigate(item.id)">
                <mat-icon class="nav-icon">{{ item.icon }}</mat-icon>
                @if (!collapsed) {
                  <span class="nav-label">{{ item.label }}</span>
                }
              </button>
            </li>
          }
        </ul>
      </nav>

      <div class="sidebar-footer">
        @if (!collapsed) {
          <a href="/components" class="footer-link">
            <mat-icon>widgets</mat-icon>
            <span>Components</span>
          </a>
        }
      </div>
    </aside>
  `,
  styles: [`
    .sidebar {
      width: 260px;
      height: 100vh;
      background: white;
      border-right: 1px solid #e0e0e0;
      display: flex;
      flex-direction: column;
      position: sticky;
      top: 0;
      transition: width 0.2s ease;
    }

    .sidebar.collapsed {
      width: 64px;
    }

    .sidebar-header {
      padding: 12px;
      display: flex;
      justify-content: flex-end;
      border-bottom: 1px solid #f0f0f0;
    }

    .toggle-btn {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      border: none;
      background: #f5f5f5;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;
    }

    .toggle-btn:hover {
      background: #e0e0e0;
    }

    .toggle-btn mat-icon {
      font-size: 20px;
      width: 20px;
      height: 20px;
      color: #49454f;
    }

    .sidebar-nav {
      flex: 1;
      overflow-y: auto;
      padding: 12px 8px;
    }

    .nav-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .nav-link {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      border: none;
      border-radius: 8px;
      background: transparent;
      cursor: pointer;
      transition: all 0.2s;
      text-align: left;
    }

    .nav-link:hover {
      background: #f5f5f5;
    }

    .nav-link.active {
      background: rgba(25, 118, 210, 0.1);
      color: #1976d2;
    }

    .nav-icon {
      font-size: 20px;
      width: 20px;
      height: 20px;
      color: #757575;
      flex-shrink: 0;
    }

    .nav-link.active .nav-icon {
      color: #1976d2;
    }

    .nav-label {
      font-size: 14px;
      font-weight: 500;
      color: #49454f;
      white-space: nowrap;
    }

    .nav-link.active .nav-label {
      color: #1976d2;
    }

    .sidebar-footer {
      padding: 12px;
      border-top: 1px solid #f0f0f0;
    }

    .footer-link {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      border-radius: 8px;
      text-decoration: none;
      color: #1976d2;
      font-weight: 500;
      font-size: 14px;
      transition: background 0.2s;
    }

    .footer-link:hover {
      background: rgba(25, 118, 210, 0.1);
    }

    .footer-link mat-icon {
      font-size: 20px;
      width: 20px;
      height: 20px;
    }

    .collapsed .nav-link {
      justify-content: center;
      padding: 12px;
    }

    .collapsed .sidebar-header {
      justify-content: center;
    }

    .collapsed .sidebar-footer {
      display: none;
    }
  `]
})
export class DocsSidebarComponent {
  items = input.required<DocsNavItem[]>();
  activeId = input<string>('');
  isCollapsed = input<boolean>(false);
  navigate = output<string>();

  private _isCollapsed = signal(false);
  get collapsed(): boolean {
    return this.isCollapsed() || this._isCollapsed();
  }

  toggleCollapse(): void {
    this._isCollapsed.update(v => !v);
  }

  onNavigate(id: string): void {
    this.navigate.emit(id);
  }
}
