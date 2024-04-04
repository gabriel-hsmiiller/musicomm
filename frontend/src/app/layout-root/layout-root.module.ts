import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRootRoutingModule } from './layout-root-routing.module';
import { LayoutRootComponent } from './layout-root.component';
import { HeaderComponent } from '../shared/header/header.component';
import { PlaybarComponent } from '../shared/playbar/playbar.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';


@NgModule({
  declarations: [LayoutRootComponent],
  imports: [
    CommonModule,
    LayoutRootRoutingModule,
    HeaderComponent,
    PlaybarComponent,
    SidebarComponent
  ]
})
export class LayoutRootModule { }
