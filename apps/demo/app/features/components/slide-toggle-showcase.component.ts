import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideToggleComponent } from '@apsara/ui';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-slide-toggle-showcase',
  standalone: true,
  imports: [CommonModule, SlideToggleComponent, FormsModule],
  template: `
    <div class="space-y-6">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Basic Toggles</h3>
        <app-slide-toggle
          [label]="'Enable notifications'"
          [(ngModel)]="notificationsEnabled" />
        <app-slide-toggle
          [label]="'Dark mode'"
          [(ngModel)]="darkMode" />
        <app-slide-toggle
          [label]="'Auto-save'"
          [(ngModel)]="autoSave" />
      </div>
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Disabled State</h3>
        <app-slide-toggle
          [label]="'Disabled (off)'"
          [checked]="false"
          [disabled]="true" />
        <app-slide-toggle
          [label]="'Disabled (on)'"
          [checked]="true"
          [disabled]="true" />
      </div>
      <div class="p-4 bg-blue-50 rounded-lg">
        <p class="text-sm text-blue-600">
          <strong>Notifications:</strong> {{ notificationsEnabled() ? 'On' : 'Off' }}
        </p>
        <p class="text-sm text-blue-600">
          <strong>Dark Mode:</strong> {{ darkMode() ? 'On' : 'Off' }}
        </p>
        <p class="text-sm text-blue-600">
          <strong>Auto-save:</strong> {{ autoSave() ? 'On' : 'Off' }}
        </p>
      </div>
    </div>
  `
})
export class SlideToggleShowcaseComponent {
  notificationsEnabled = signal(true);
  darkMode = signal(false);
  autoSave = signal(true);
}
