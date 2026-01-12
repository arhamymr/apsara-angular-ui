import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ThemeService } from '../../../core/services';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    NgOptimizedImage
  ],
  template: `
    <mat-toolbar color="primary">
      <a routerLink="/">
        <img 
          [ngSrc]="themeService.theme() === 'dark' ? 'https://assets.apsaradigital.com/logo-angular-white.png' : 'https://assets.apsaradigital.com/logo-angular.png'" 
          width="120" 
          height="30" 
          alt="Logo" 
          class="logo">
        </a>
      <span class="spacer"></span>
      
      <a mat-button routerLink="/docs" routerLinkActive="active">Docs</a>
      <a mat-button routerLink="/components" routerLinkActive="active">Components</a>
      
      <button 
        mat-icon-button 
        [matTooltip]="(themeService.theme() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode')"
        (click)="themeService.toggle()">

        @if (themeService.theme() === 'dark') {
          <mat-icon>light_mode</mat-icon>
        } @else {
          <mat-icon>dark_mode</mat-icon>
        }

      </button>
      
      <a mat-button routerLink="/auth/login" routerLinkActive="active">Login</a>
    </mat-toolbar>
  `,
  styles: [`
    .spacer { flex: 1 1 auto; }
    .active { background: rgba(255,255,255,0.1); }
    a { color: white; text-decoration: none; }
    .logo { height: 20px; width: auto; }
  `]
})
export class NavbarComponent {
  themeService = inject(ThemeService);
}
