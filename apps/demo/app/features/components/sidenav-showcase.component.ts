import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from '@apsara/ui';
import { ButtonComponent } from '@apsara/ui';

@Component({
  selector: 'app-sidenav-showcase',
  standalone: true,
  imports: [CommonModule, SidenavComponent, ButtonComponent],
  template: `
    <div class="ai-review-banner">
      <span class="ai-review-icon">⚠️</span>
      <span class="ai-review-text">AI-Generated Component - Pending Review</span>
    </div>
    <div class="space-y-6">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Left Sidenav</h3>
        <div class="border border-gray-200 rounded-lg overflow-hidden">
          <div class="p-4">
            <app-button
              label="Toggle Sidenav"
              variant="primary"
              (clicked)="toggleSidenav()" />
          </div>
          <app-sidenav
            [isOpen]="isOpen()"
            [position]="'left'"
            [hasHeader]="true"
            (closed)="closeSidenav()">
            <div sidenav-header>
              <h3 class="font-semibold text-gray-900">Menu</h3>
            </div>
            <div class="space-y-1">
              <button class="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
                <i class="material-icons text-sm">dashboard</i>
                Dashboard
              </button>
              <button class="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
                <i class="material-icons text-sm">people</i>
                Users
              </button>
              <button class="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
                <i class="material-icons text-sm">settings</i>
                Settings
              </button>
            </div>
          </app-sidenav>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .ai-review-banner {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 1.5rem;
      background: #fef3c7;
      border: 1px solid #f59e0b;
      border-radius: 8px;
      margin-bottom: 2rem;
    }

    .ai-review-icon {
      font-size: 1.25rem;
    }

    .ai-review-text {
      font-size: 0.875rem;
      font-weight: 600;
      color: #92400e;
    }
  `]
})
export class SidenavShowcaseComponent {
  isOpen = signal(false);

  toggleSidenav(): void {
    this.isOpen.update(v => !v);
  }

  closeSidenav(): void {
    this.isOpen.set(false);
  }
}
