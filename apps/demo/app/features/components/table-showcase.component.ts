import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent, TableHeaderDirective, TableCellDirective } from '@apsara/ui';

@Component({
  selector: 'app-table-showcase',
  standalone: true,
  imports: [CommonModule, TableComponent, TableHeaderDirective, TableCellDirective],
  template: `
    <div class="space-y-6">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Basic Table</h3>
        <app-table [rows]="users()">
          <th table-header class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
          <th table-header class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
          <th table-header class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
          
          @for (user of users(); track user.name) {
            <td table-cell class="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{{ user.name }}</td>
            <td table-cell class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{{ user.email }}</td>
            <td table-cell class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{{ user.role }}</td>
          }
        </app-table>
      </div>
      <div class="p-4 bg-blue-50 rounded-lg">
        <p class="text-sm text-blue-600">
          <strong>Table with content projection</strong>
        </p>
      </div>
    </div>
  `
})
export class TableShowcaseComponent {
  users = signal([
    { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' }
  ]);
}
