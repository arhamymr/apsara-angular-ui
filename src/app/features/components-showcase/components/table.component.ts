import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-table-section',
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, MatIconModule, MatTabsModule],
  template: `
    <div class="section-container">
      <header class="section-header">
        <h1>Table</h1>
        <p class="section-description">Tables display sets of data in rows and columns.</p>
      </header>
      
      <mat-tab-group [(selectedIndex)]="activeTab" class="section-tabs">
        <mat-tab label="Preview">
          <div class="tab-content">
            <section class="demo-group">
              <h3>Basic Table</h3>
              <p>Simple data table with status badges.</p>
              <div class="demo-row">
                <div class="table-wrapper">
                  <table mat-table [dataSource]="dataSource" class="demo-table">
                    <ng-container matColumnDef="name">
                      <th mat-header-cell *matHeaderCellDef>Name</th>
                      <td mat-cell *matCellDef="let element">{{element.name}}</td>
                    </ng-container>
                    <ng-container matColumnDef="email">
                      <th mat-header-cell *matHeaderCellDef>Email</th>
                      <td mat-cell *matCellDef="let element">{{element.email}}</td>
                    </ng-container>
                    <ng-container matColumnDef="role">
                      <th mat-header-cell *matHeaderCellDef>Role</th>
                      <td mat-cell *matCellDef="let element">{{element.role}}</td>
                    </ng-container>
                    <ng-container matColumnDef="status">
                      <th mat-header-cell *matHeaderCellDef>Status</th>
                      <td mat-cell *matCellDef="let element">
                        <span class="badge" [class]="element.statusClass">{{element.status}}</span>
                      </td>
                    </ng-container>
                    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
                    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
                  </table>
                  <div class="table-pagination">
                    <span class="pagination-info">Showing 1-3 of 10</span>
                    <div class="pagination-buttons">
                      <button class="pagination-btn" disabled>Previous</button>
                      <button class="pagination-btn">Next</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </mat-tab>
        
        <mat-tab label="Code">
          <div class="tab-content">
            <pre class="code-block"><code>import {{ '{' }} Component {{ '}' }} from '@angular/core';
import {{ '{' }} MatTableModule {{ '}' }} from '@angular/material/table';

@Component({{ '{' }}
  selector: 'app-table-demo',
  imports: [MatTableModule],
  template: \`
    &lt;table mat-table [dataSource]="dataSource"&gt;
      &lt;ng-container matColumnDef="name"&gt;
        &lt;th mat-header-cell *matHeaderCellDef&gt;Name&lt;/th&gt;
        &lt;td mat-cell *matCellDef="let element"&gt;{{ '{' }}{{ '{' }}element.name{{ '}' }}{{ '}' }}&lt;/td&gt;
      &lt;/ng-container&gt;
      &lt;tr mat-header-row *matHeaderRowDef="displayedColumns"&gt;&lt;/tr&gt;
      &lt;tr mat-row *matRowDef="let row; columns: displayedColumns;"&gt;&lt;/tr&gt;
    &lt;/table&gt;
  \`
{{ '}' }})
export class TableDemoComponent {{ '{' }} {{ '}' }}</code></pre>
          </div>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
  styles: [`
    .section-container { max-width: 1000px; margin: 0 auto; }
    .section-header { margin-bottom: 32px; }
    h1 { font-size: 36px; font-weight: 600; color: #1c1b1f; margin: 0 0 8px; }
    .section-description { font-size: 16px; color: #616161; margin: 0; line-height: 1.6; }
    .section-tabs { background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); }
    .tab-content { padding: 32px; }
    .demo-group { margin-bottom: 40px; }
    .demo-group h3 { font-size: 18px; font-weight: 600; color: #1c1b1f; margin: 0 0 8px; }
    .demo-group p { font-size: 14px; color: #616161; margin: 0 0 16px; }
    .demo-row { display: flex; gap: 16px; flex-wrap: wrap; }
    .table-wrapper { width: 100%; }
    .demo-table { width: 100%; }
    .demo-table th { text-align: left; padding: 14px 16px; font-size: 12px; font-weight: 600; text-transform: uppercase; color: #616161; background: #fafafa; border-bottom: 1px solid #e0e0e0; }
    .demo-table td { padding: 14px 16px; font-size: 14px; color: #1c1b1f; border-bottom: 1px solid #f0f0f0; }
    .badge { display: inline-block; padding: 4px 10px; border-radius: 16px; font-size: 12px; font-weight: 500; }
    .badge-success { background: rgba(76, 175, 80, 0.1); color: #4caf50; }
    .badge-warning { background: rgba(255, 152, 0, 0.1); color: #ff9800; }
    .badge-error { background: rgba(244, 67, 54, 0.1); color: #f44336; }
    .table-pagination { display: flex; align-items: center; justify-content: space-between; padding: 16px; border-top: 1px solid #f0f0f0; }
    .pagination-info { font-size: 14px; color: #616161; }
    .pagination-buttons { display: flex; gap: 8px; }
    .pagination-btn { padding: 8px 16px; border: 1px solid #e0e0e0; background: white; border-radius: 8px; font-size: 14px; cursor: pointer; }
    .pagination-btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .code-block { background: #1e1e1e; color: #d4d4d4; padding: 24px; border-radius: 8px; font-family: 'Fira Code', monospace; font-size: 14px; line-height: 1.6; overflow-x: auto; margin: 0; }
  `]
})
export class TableSectionComponent {
  activeTab = signal(0);
  displayedColumns = ['name', 'email', 'role', 'status'];
  dataSource = [
    { name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', statusClass: 'badge-success' },
    { name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Pending', statusClass: 'badge-warning' },
    { name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive', statusClass: 'badge-error' },
  ];
}
