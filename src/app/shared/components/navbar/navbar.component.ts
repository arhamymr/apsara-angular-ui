import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatDividerModule],
  template: `
    <mat-toolbar color="primary">
      <span class="logo">Petaloker</span>
      <span class="spacer"></span>
      
      <a mat-button routerLink="/" routerLinkActive="active">Home</a>
      <a mat-button routerLink="/ads" routerLinkActive="active">Ads</a>
      <a mat-button routerLink="/about" routerLinkActive="active">About</a>
      <a mat-button routerLink="/users" routerLinkActive="active">Users</a>
      <a mat-button routerLink="/settings" routerLinkActive="active">Settings</a>
      <a mat-button routerLink="/components" routerLinkActive="active">Components</a>
      
      <button mat-icon-button [matMenuTriggerFor]="userMenu">
        <mat-icon>account_circle</mat-icon>
      </button>
      
      <mat-menu #userMenu="matMenu">
        <button mat-menu-item>
          <mat-icon>person</mat-icon>
          <span>Profile</span>
        </button>
        <button mat-menu-item>
          <mat-icon>settings</mat-icon>
          <span>Settings</span>
        </button>
        <mat-divider />
        <button mat-menu-item>
          <mat-icon>logout</mat-icon>
          <span>Logout</span>
        </button>
      </mat-menu>
    </mat-toolbar>
  `,
  styles: [`
    .spacer { flex: 1 1 auto; }
    .active { background: rgba(255,255,255,0.1); }
    a { color: white; text-decoration: none; }
    .logo { font-weight: 600; font-size: 20px; }
  `]
})
export class NavbarComponent {}
