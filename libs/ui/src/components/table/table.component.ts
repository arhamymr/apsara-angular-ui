import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cn } from '../../lib/cn';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="overflow-x-auto border border-gray-200 rounded-lg">
      <table class="w-full text-sm">
        <thead class="bg-gray-50">
          <tr>
            <ng-content select="[table-header-1]" />
            <ng-content select="[table-header-2]" />
            <ng-content select="[table-header-3]" />
            <ng-content select="[table-header-4]" />
            <ng-content select="[table-header-5]" />
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          @for (row of rows(); track $index) {
            <tr class="hover:bg-gray-50">
              <td><ng-content select="[table-cell-1]" /></td>
              <td><ng-content select="[table-cell-2]" /></td>
              <td><ng-content select="[table-cell-3]" /></td>
              <td><ng-content select="[table-cell-4]" /></td>
              <td><ng-content select="[table-cell-5]" /></td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `
})
export class TableComponent {
  rows = input<unknown[]>([]);
  cn = cn;
}
