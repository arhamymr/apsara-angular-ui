import { Component, input, output, signal, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cn } from '../../lib/cn';

export interface SortColumn {
  name: string;
  direction: 'asc' | 'desc' | '';
}

export interface SortEvent {
  active: string;
  direction: 'asc' | 'desc' | '';
}

@Component({
  selector: 'app-sort-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="flex items-center gap-2 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      (click)="onSort()"
      [attr.aria-sort]="getSortDirection()">
      <span>{{ label() }}</span>
      <i
        class="material-icons text-sm transition-transform"
        [class.rotate-180]="getSortDirection() === 'asc'"
        [class.opacity-0]="getSortDirection() === ''"
        [class.opacity-100]="getSortDirection() !== ''">
        arrow_upward
      </i>
    </button>
  `
})
export class SortHeaderComponent {
  label = input<string>('');
  column = input<string>('');
  private _sortDirection = signal<'asc' | 'desc' | ''>('');
  sortChange = output<SortEvent>();

  getSortDirection(): 'asc' | 'desc' | '' {
    return this._sortDirection();
  }

  @Input()
  set sortDirection(value: 'asc' | 'desc' | '') {
    this._sortDirection.set(value);
  }

  onSort(): void {
    const current = this._sortDirection();
    let direction: 'asc' | 'desc' | '' = 'asc';
    if (current === 'asc') {
      direction = 'desc';
    } else if (current === 'desc') {
      direction = '';
    }
    this._sortDirection.set(direction);
    this.sortChange.emit({ active: this.column(), direction });
  }

  cn = cn;
}
