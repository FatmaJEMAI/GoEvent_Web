import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackComponent } from './back/back.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    BackComponent,
    SidebarComponent,
    LayoutsComponent,
    //PagesComponent,
    //SharedComponent
    PagesModule,
    SharedModule
  ],
  imports: [
    CommonModule
  ]
})
export class BackOfficeModule { }
