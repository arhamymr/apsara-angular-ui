import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from '@apsara/ui';

@Component({
  selector: 'app-paginator-showcase',
  standalone: true,
  imports: [CommonModule, PaginatorComponent],
  template: `
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
  `
})
export class PaginatorShowcaseComponent {
  pageIndex = signal(0);
  pageSize = signal(10);

  onPageChange(event: { pageIndex: number; pageSize: number }): void {
    this.pageIndex.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
  }
}
