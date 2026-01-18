import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortHeaderComponent, SortEvent } from '@apsara/ui';

@Component({
  selector: 'app-sort-header-showcase',
  standalone: true,
  imports: [CommonModule, SortHeaderComponent],
  template: `
    <div class="space-y-6">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Sortable Columns</h3>
        <div class="border border-gray-200 rounded-lg overflow-hidden">
          <table class="w-full">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left">
                  <app-sort-header
                    label="Name"
                    column="name"
                    [sortDirection]="sorts()['name']()"
                    (sortChange)="onSortChange($event, 'name')" />
                </th>
                <th class="px-4 py-3 text-left">
                  <app-sort-header
                    label="Email"
                    column="email"
                    [sortDirection]="sorts()['email']()"
                    (sortChange)="onSortChange($event, 'email')" />
                </th>
                <th class="px-4 py-3 text-left">
                  <app-sort-header
                    label="Role"
                    column="role"
                    [sortDirection]="sorts()['role']()"
                    (sortChange)="onSortChange($event, 'role')" />
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              @for (user of sortedUsers(); track $index) {
                <tr class="hover:bg-gray-50">
                  <td class="px-4 py-3 text-sm text-gray-900">{{ user.name }}</td>
                  <td class="px-4 py-3 text-sm text-gray-500">{{ user.email }}</td>
                  <td class="px-4 py-3 text-sm text-gray-500">{{ user.role }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
      <div class="p-4 bg-blue-50 rounded-lg">
        <p class="text-sm text-blue-600">
          <strong>Last sort:</strong> {{ lastSort() || 'None' }}
        </p>
      </div>
    </div>
  `
})
export class SortHeaderShowcaseComponent {
  users = [
    { name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' },
    { name: 'Alice Brown', email: 'alice@example.com', role: 'Admin' }
  ];

  sorts = signal<{ [key: string]: () => 'asc' | 'desc' | '' }>({
    name: () => '',
    email: () => '',
    role: () => ''
  });
  sortedUsers = signal(this.users);
  lastSort = signal<string>('');

  onSortChange(event: SortEvent, column: string): void {
    this.sorts.update(s => ({
      ...s,
      [column]: () => event.direction
    }));
    this.lastSort.set(`${column}: ${event.direction || 'none'}`);

    const direction = event.direction;
    if (direction) {
      const sorted = [...this.users].sort((a, b) => {
        const aVal = (a as Record<string, string>)[column].toLowerCase();
        const bVal = (b as Record<string, string>)[column].toLowerCase();
        return direction === 'asc' 
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      });
      this.sortedUsers.set(sorted);
    } else {
      this.sortedUsers.set(this.users);
    }
  }
}
