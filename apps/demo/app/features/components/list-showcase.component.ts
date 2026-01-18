import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '@apsara/ui';
import { ListItemComponent } from '@apsara/ui';

@Component({
  selector: 'app-list-showcase',
  standalone: true,
  imports: [CommonModule, ListComponent, ListItemComponent],
  template: `
    <div class="ai-review-banner">
      <span class="ai-review-icon">⚠️</span>
      <span class="ai-review-text">AI-Generated Component - Pending Review</span>
    </div>
    <div class="space-y-6">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Basic List</h3>
        <app-list>
          <app-list-item [title]="'Inbox'" [subtitle]="'5 new messages'" (clicked)="onItemClick('Inbox')">
            <i leading class="material-icons text-gray-400">inbox</i>
          </app-list-item>
          <app-list-item [title]="'Sent'" [subtitle]="'12 sent items'" (clicked)="onItemClick('Sent')">
            <i leading class="material-icons text-gray-400">send</i>
          </app-list-item>
          <app-list-item [title]="'Drafts'" (clicked)="onItemClick('Drafts')">
            <i leading class="material-icons text-gray-400">drafts</i>
          </app-list-item>
        </app-list>
      </div>
      <div class="p-4 bg-blue-50 rounded-lg">
        <p class="text-sm text-blue-600">
          <strong>Last clicked:</strong> {{ lastClicked() || 'None' }}
        </p>
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
export class ListShowcaseComponent {
  lastClicked = signal<string>('');

  onItemClick(item: string): void {
    this.lastClicked.set(item);
  }
}
