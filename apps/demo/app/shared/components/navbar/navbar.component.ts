import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../../core/services';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, NgOptimizedImage],
  template: `
    <nav class="navbar">
      <div class="nav-content">
        <div class="logo-section">
          <a routerLink="/" class="logo-link">
            <img
              [ngSrc]="themeService.theme() === 'dark' ? 'https://assets.apsaradigital.com/logo-angular-white.png' : 'https://assets.apsaradigital.com/logo-angular.png'"
              width="120"
              height="30"
              alt="Logo"
              class="logo">
          </a>
          <span class="version-badge">v1.0.0</span>
        </div>

        <div class="nav-links">
          <a routerLink="/components" routerLinkActive="active">Components</a>
          <a routerLink="/docs" routerLinkActive="active">Docs</a>

          <button class="theme-toggle" (click)="themeService.toggle()">
            @if (themeService.theme() === 'dark') {
              <span>Light</span>
            } @else {
              <span>Dark</span>
            }
          </button>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 50;
      background: var(--background);
      border-bottom: 1px solid var(--border);
      padding: 0 1rem;
    }
    .nav-content {
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 64px;
    }
    .logo-section {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .logo-link {
      display: flex;
      align-items: center;
    }
    .logo {
      height: 24px;
      width: auto;
    }
    .version-badge {
      background: oklch(0.55 0.2 250 / 0.1);
      color: var(--primary);
      font-size: 11px;
      font-weight: 600;
      padding: 4px 8px;
      border-radius: var(--radius-xs);
    }
    .nav-links {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }
    .nav-links a {
      color: var(--foreground);
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: var(--radius);
      font-size: 14px;
      font-weight: 500;
      transition: background 0.2s;
    }
    .nav-links a:hover {
      background: var(--accent);
    }
    .nav-links a.active {
      background: var(--accent);
    }
    .theme-toggle {
      background: var(--accent);
      border: 1px solid var(--border);
      color: var(--foreground);
      padding: 0.5rem 1rem;
      border-radius: var(--radius);
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      transition: background 0.2s;
    }
    .theme-toggle:hover {
      background: var(--border);
    }
  `]
})
export class NavbarComponent {
  themeService = inject(ThemeService);
}
