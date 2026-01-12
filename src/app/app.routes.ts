import { Routes } from '@angular/router';
import { HomeComponent, AboutComponent, UsersComponent, SettingsComponent } from './features';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'users', component: UsersComponent },
  { path: 'settings', component: SettingsComponent },
  { 
    path: 'components', 
    loadComponent: () => import('./features/components-showcase/components-showcase.component').then(m => m.ComponentsShowcaseComponent),
    loadChildren: () => import('./features/components-showcase/components-showcase.routes').then(m => m.COMPONENTS_SHOWCASE_ROUTES)
  },
  { path: '**', redirectTo: '' }
];
