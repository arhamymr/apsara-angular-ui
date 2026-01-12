import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

export interface MenuItem {
  label?: string;
  icon?: string;
  disabled?: boolean;
  divider?: boolean;
  submenu?: MenuItem[];
}

@Component({
  selector: 'app-menu',
  imports: [CommonModule, MatMenuModule, MatIconModule, MatButtonModule, MatDividerModule],
  template: `
    <div class="menu-wrapper">
      @if (triggerType() === 'button') {
        <button mat-raised-button [color]="color()" [disabled]="disabled()" [matMenuTriggerFor]="menu">
          @if (icon()) {
            <mat-icon>{{ icon() }}</mat-icon>
          }
          {{ label() }}
          @if (arrow()) {
            <mat-icon>arrow_drop_down</mat-icon>
          }
        </button>
      } @else if (triggerType() === 'icon') {
        <button mat-icon-button [disabled]="disabled()" [matMenuTriggerFor]="menu">
          <mat-icon>{{ icon() || 'more_vert' }}</mat-icon>
        </button>
      } @else {
        <a mat-button [disabled]="disabled()" [matMenuTriggerFor]="menu">
          {{ label() }}
          @if (arrow()) {
            <mat-icon>arrow_drop_down</mat-icon>
          }
        </a>
      }
      
      <mat-menu #menu="matMenu" [class]="menuClass()">
        @for (item of items(); track item.label) {
          @if (item.divider) {
            <mat-divider />
          } @else if (item.submenu) {
            <button mat-menu-item [matMenuTriggerFor]="submenu">
              @if (item.icon) {
                <mat-icon>{{ item.icon }}</mat-icon>
              }
              {{ item.label }}
              <mat-icon>chevron_right</mat-icon>
            </button>
            <mat-menu #submenu="matMenu">
              @for (subItem of item.submenu; track subItem.label) {
                @if (subItem.divider) {
                  <mat-divider />
                } @else {
                  <button mat-menu-item [disabled]="subItem.disabled">
                    @if (subItem.icon) {
                      <mat-icon>{{ subItem.icon }}</mat-icon>
                    }
                    {{ subItem.label }}
                  </button>
                }
              }
            </mat-menu>
          } @else {
            <button mat-menu-item [disabled]="item.disabled">
              @if (item.icon) {
                <mat-icon>{{ item.icon }}</mat-icon>
              }
              {{ item.label }}
            </button>
          }
        }
      </mat-menu>
    </div>
  `,
  styles: [`
    .menu-wrapper { display: inline-block; }
    
    :host ::ng-deep {
      .mat-mdc-menu-panel {
        border-radius: 12px !important;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15) !important;
      }
      
      .mat-mdc-menu-item {
        min-height: 44px;
        padding: 0 16px;
      }
    }
  `]
})
export class MenuComponent {
  readonly items = input<MenuItem[]>([]);
  readonly label = input<string>('');
  readonly icon = input<string>('');
  readonly color = input<'primary' | 'accent' | 'warn'>('primary');
  readonly disabled = input<boolean>(false);
  readonly triggerType = input<'button' | 'icon' | 'text'>('button');
  readonly arrow = input<boolean>(true);
  readonly menuClass = input<string>('');
  
  readonly selected = output<MenuItem>();
}
