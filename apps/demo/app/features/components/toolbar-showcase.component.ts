import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '@apsara/ui';
import { ButtonComponent } from '@apsara/ui';

@Component({
  selector: 'app-toolbar-showcase',
  standalone: true,
  imports: [CommonModule, ToolbarComponent, ButtonComponent],
  template: `
    <div class="space-y-6">
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Default Toolbar</h3>
        <app-toolbar
          [title]="'My Application'"
          [hasMenu]="true"
          (menuClicked)="onMenuClick()">
          <button toolbar-actions class="p-2 rounded hover:bg-gray-100">
            <i class="material-icons">search</i>
          </button>
          <button toolbar-actions class="p-2 rounded hover:bg-gray-100">
            <i class="material-icons">notifications</i>
          </button>
        </app-toolbar>
      </div>
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Dense Toolbar</h3>
        <app-toolbar
          [title]="'Settings'"
          [dense]="true"
          [hasMenu]="true">
          <button toolbar-actions class="p-2 rounded hover:bg-gray-100">
            <i class="material-icons">more_vert</i>
          </button>
        </app-toolbar>
      </div>
    </div>
  `
})
export class ToolbarShowcaseComponent {
  onMenuClick(): void {
    console.log('Menu clicked');
  }
}
