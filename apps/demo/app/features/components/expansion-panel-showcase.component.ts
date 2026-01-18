import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpansionPanelComponent } from '@apsara/ui';

@Component({
  selector: 'app-expansion-panel-showcase',
  standalone: true,
  imports: [CommonModule, ExpansionPanelComponent],
  template: `
    <div class="ai-review-banner">
      <span class="ai-review-icon">⚠️</span>
      <span class="ai-review-text">AI-Generated Component - Pending Review</span>
    </div>
    <div class="space-y-4">
      <h3 class="text-lg font-medium">Expansion Panels</h3>
      <app-expansion-panel
        title="Getting Started"
        [isOpen]="panels()['getting-started']()"
        (expanded)="togglePanel('getting-started', $event)">
        <p class="text-sm text-gray-600">
          Welcome to our application! This guide will help you get started quickly.
          Learn about the basic features and how to navigate through the interface.
        </p>
      </app-expansion-panel>
      <app-expansion-panel
        title="Configuration"
        [isOpen]="panels()['configuration']()"
        (expanded)="togglePanel('configuration', $event)">
        <p class="text-sm text-gray-600">
          Configure your application settings here. You can customize themes,
          notifications, and user preferences to match your needs.
        </p>
      </app-expansion-panel>
      <app-expansion-panel
        title="Advanced Settings"
        [isOpen]="panels()['advanced']()"
        (expanded)="togglePanel('advanced', $event)">
        <p class="text-sm text-gray-600">
          Advanced users can fine-tune performance settings, API configurations,
          and integrate with external services using these options.
        </p>
      </app-expansion-panel>
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
export class ExpansionPanelShowcaseComponent {
  panels = signal<{ [key: string]: () => boolean }>({
    'getting-started': () => true,
    'configuration': () => false,
    'advanced': () => false
  });

  togglePanel(key: string, expanded: boolean): void {
    this.panels.update(p => ({
      ...p,
      [key]: () => expanded
    }));
  }
}
