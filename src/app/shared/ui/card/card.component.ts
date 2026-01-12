import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

export interface CardAction {
  label: string;
  icon: string;
  color?: string;
}

export interface CardTag {
  label: string;
  variant?: 'primary' | 'success' | 'warn' | 'error';
}

@Component({
  selector: 'app-card',
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  template: `
    <mat-card 
      [class.elevated]="variant() === 'elevated'"
      [class.outlined]="variant() === 'outlined'"
      [class.tonal]="variant() === 'tonal'"
      [class.interactive]="interactive()"
      class="custom-card">
      
      @if (imageSrc()) {
        <div class="card-image" [class.large]="imageSize() === 'large'" [class.medium]="imageSize() === 'medium'" [class.small]="imageSize() === 'small'">
          <img [src]="imageSrc()" [alt]="imageAlt()" />
          @if (imageOverlay()) {
            <div class="image-overlay">
              <span class="overlay-badge">{{ imageOverlay() }}</span>
            </div>
          }
        </div>
      }
      
      @if (header()) {
        <mat-card-header>
          <div mat-card-avatar class="header-avatar" [style.background-color]="avatarColor()">
            @if (avatarIcon()) {
              <mat-icon>{{ avatarIcon() }}</mat-icon>
            } @else {
              {{ header()?.charAt(0) }}
            }
          </div>
          <mat-card-title>{{ header() }}</mat-card-title>
          @if (subheader()) {
            <mat-card-subtitle>{{ subheader() }}</mat-card-subtitle>
          }
          @if (headerAction()) {
            <div class="header-action">
              <button mat-icon-button (click)="headerActionClick.emit($event)">
                <mat-icon>more_vert</mat-icon>
              </button>
            </div>
          }
        </mat-card-header>
      }
      
      <mat-card-content [class.has-header]="header()">
        @if (title()) {
          <h2 class="card-title">{{ title() }}</h2>
        }
        @if (subtitle()) {
          <p class="card-subtitle">{{ subtitle() }}</p>
        }
        <div class="card-body">
          <ng-content />
        </div>
        @if (tags().length) {
          <div class="card-tags">
            @for (tag of tags(); track tag.label) {
              <span class="tag" [attr.data-variant]="tag.variant || 'primary'">{{ tag.label }}</span>
            }
          </div>
        }
      </mat-card-content>
      
      @if (hasActions()) {
        <mat-card-actions>
          @for (action of actions(); track action.label) {
            <button mat-button 
                    [color]="action.color"
                    (click)="actionClick.emit(action)">
              <mat-icon>{{ action.icon }}</mat-icon>
              {{ action.label }}
            </button>
          }
          <ng-content select="[card-actions]" />
        </mat-card-actions>
      }
      
      @if (footer()) {
        <mat-card-footer class="card-footer">
          <ng-content select="[card-footer]" />
        </mat-card-footer>
      }
    </mat-card>
  `,
  styles: [`
    :host {
      --card-radius: 12px;
      --card-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
      --card-shadow-hover: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
      --card-primary: #1976d2;
    }
    
    .custom-card {
      border-radius: var(--card-radius);
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      
      &.elevated {
        box-shadow: var(--card-shadow);
        
        &:hover {
          box-shadow: var(--card-shadow-hover);
        }
      }
      
      &.outlined {
        border: 1px solid #e0e0e0;
        box-shadow: none;
        
        &:hover {
          border-color: var(--card-primary);
        }
      }
      
      &.tonal {
        background: linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%);
        box-shadow: none;
      }
      
      &.interactive {
        cursor: pointer;
        
        &:hover {
          transform: translateY(-2px);
          box-shadow: var(--card-shadow-hover);
        }
      }
    }
    
    .card-image {
      position: relative;
      overflow: hidden;
      
      &.large { height: 200px; }
      &.medium { height: 160px; }
      &.small { height: 120px; }
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }
      
      &:hover img {
        transform: scale(1.05);
      }
    }
    
    .image-overlay {
      position: absolute;
      bottom: 12px;
      left: 12px;
    }
    
    .overlay-badge {
      background: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 4px 12px;
      border-radius: 16px;
      font-size: 12px;
      font-weight: 500;
    }
    
    mat-card-header {
      position: relative;
      padding: 16px;
      
      .header-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 500;
        font-size: 16px;
      }
      
      .header-action {
        position: absolute;
        top: 8px;
        right: 8px;
      }
    }
    
    mat-card-content {
      padding: 16px;
      
      &.has-header {
        padding-top: 8px;
      }
    }
    
    .card-title {
      margin: 0 0 8px;
      font-size: 18px;
      font-weight: 600;
      color: #1c1b1f;
      line-height: 1.3;
    }
    
    .card-subtitle {
      margin: 0 0 12px;
      font-size: 14px;
      color: #49454f;
      line-height: 1.4;
    }
    
    .card-body {
      font-size: 14px;
      color: #1c1b1f;
      line-height: 1.6;
    }
    
    .card-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 16px;
    }
    
    .tag {
      display: inline-flex;
      align-items: center;
      padding: 4px 12px;
      border-radius: 16px;
      font-size: 12px;
      font-weight: 500;
      
      &[data-variant="primary"] {
        background: rgba(25, 118, 210, 0.1);
        color: #1976d2;
      }
      
      &[data-variant="success"] {
        background: rgba(76, 175, 80, 0.1);
        color: #4caf50;
      }
      
      &[data-variant="warn"] {
        background: rgba(255, 152, 0, 0.1);
        color: #ff9800;
      }
      
      &[data-variant="error"] {
        background: rgba(244, 67, 54, 0.1);
        color: #f44336;
      }
    }
    
    mat-card-actions {
      padding: 8px 12px;
      gap: 4px;
    }
    
    .card-footer {
      padding: 12px 16px;
      border-top: 1px solid #f0f0f0;
      background: #fafafa;
    }
    
    ::ng-deep mat-card-actions button {
      text-transform: uppercase;
      font-weight: 500;
      letter-spacing: 0.5px;
    }
  `]
})
export class CardComponent {
  readonly variant = input<'elevated' | 'outlined' | 'tonal'>('elevated');
  readonly title = input<string>('');
  readonly subtitle = input<string>('');
  readonly header = input<string>('');
  readonly subheader = input<string>('');
  readonly imageSrc = input<string>('');
  readonly imageAlt = input<string>('');
  readonly imageSize = input<'small' | 'medium' | 'large'>('large');
  readonly imageOverlay = input<string>('');
  readonly avatarIcon = input<string>('');
  readonly avatarColor = input<string>('#1976d2');
  readonly hint = input<string>('');
  readonly disabled = input<boolean>(false);
  readonly interactive = input<boolean>(false);
  readonly fullWidth = input<boolean>(true);
  readonly headerAction = input<boolean>(false);
  readonly footer = input<boolean>(false);
  
  readonly actions = input<CardAction[]>([]);
  readonly tags = input<CardTag[]>([]);
  
  readonly actionClick = output<CardAction>();
  readonly headerActionClick = output<Event>();
  
  hasActions(): boolean {
    return this.actions().length > 0;
  }
}
