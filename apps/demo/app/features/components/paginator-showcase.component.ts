import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from '@apsara/ui';

@Component({
  selector: 'app-paginator-showcase',
  standalone: true,
  imports: [CommonModule, PaginatorComponent],
  template: `
    <div class="ai-review-banner">
      <span class="ai-review-icon">⚠️</span>
      <span class="ai-review-text">AI-Generated Component - Pending Review</span>
    </div>
    <div class="space-y-6">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Basic Paginator</h3>
        <app-paginator
          [length]="100"
          [pageSize]="pageSize()"
          [pageIndex]="pageIndex()"
          (pageChange)="onPageChange($event)" />
      </div>
      <div class="p-4 bg-blue-50 rounded-lg">
        <p class="text-sm text-blue-600">
          <strong>Current Page:</strong> {{ pageIndex() + 1 }} | 
          <strong>Page Size:</strong> {{ pageSize() }}
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
export class PaginatorShowcaseComponent {
  pageIndex = signal(0);
  pageSize = signal(10);

  onPageChange(event: { pageIndex: number; pageSize: number }): void {
    this.pageIndex.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
  }
}
