import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../../core/services';
import { ButtonComponent } from '@apsara/ui';
import { LucideAngularModule, Sun, Moon } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, NgOptimizedImage, ButtonComponent, LucideAngularModule],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background">
      <div class="max-w-[1400px] mx-auto flex items-center justify-between h-16 px-6">
        <div class="flex items-center gap-3">
          <a routerLink="/" class="flex items-center">
            <img
              [ngSrc]="themeService.theme() === 'dark' ? 'https://assets.apsaradigital.com/aether-logo-white.png' : 'https://assets.apsaradigital.com/aether-logo.png'"
              width="140"
              height="32"
              alt="Aether Logo"
              class="h-5.5 w-auto"
            />
          </a>
          <span class="bg-[oklch(0.55_0.2_250/0.1)] text-primary text-[11px] font-semibold px-2 py-1 rounded-sm">
            v0 (alpha)
          </span>
        </div>

        <div class="flex items-center gap-4">
          <app-button variant="plain" routerLink="/components" routerLinkActive="text-foreground rounded-xl font-medium bg-accent/50" [routerLinkActiveOptions]="{exact: false}" class="text-foreground">
            Components
          </app-button>
          <app-button variant="plain" routerLink="/docs" routerLinkActive="text-foreground rounded-xl font-medium bg-accent/50">Docs</app-button>
          <app-button
            variant="outline"
            size="icon"
            (clicked)="themeService.toggle()">
            @if (themeService.theme() === 'dark') {
              <lucide-angular [img]="Sun" [size]="16" />
            } @else {
              <lucide-angular [img]="Moon" [size]="16" />
            }
          </app-button>
        </div>
      </div>
    </nav>
  `
})


export class NavbarComponent {
  themeService: ThemeService;
  Sun = Sun;
  Moon = Moon;

  constructor(themeService: ThemeService) {
    this.themeService = themeService;
  }
}
