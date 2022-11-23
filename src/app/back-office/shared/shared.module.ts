import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FixedpluginComponent } from './fixedplugin/fixedplugin.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    FixedpluginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
