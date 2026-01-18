import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '@apsara/ui';
import { ListItemComponent } from '@apsara/ui';

@Component({
  selector: 'app-list-showcase',
  standalone: true,
  imports: [CommonModule, ListComponent, ListItemComponent],
  template: `
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
  `
})
export class ListShowcaseComponent {
  lastClicked = signal<string>('');

  onItemClick(item: string): void {
    this.lastClicked.set(item);
  }
}
