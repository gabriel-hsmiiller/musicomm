import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutRootComponent } from './layout-root.component';

export const routes: Routes = [
  { path: '', component: LayoutRootComponent, loadChildren: () => import('../home/home.module').then(m => m.HomeModule),},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRootRoutingModule { }
