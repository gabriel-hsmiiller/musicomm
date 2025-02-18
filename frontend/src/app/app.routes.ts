import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./layout-root/layout-root.module').then(m => m.LayoutRootModule) },
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
];
