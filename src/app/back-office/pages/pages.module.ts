import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotableComponent } from './notable/notable.component';
import { TypographyComponent } from './typography/typography.component';
import { UserComponent } from './user/user.component';
import { UpgardeComponent } from './upgarde/upgarde.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    NotableComponent,
    TypographyComponent,
    UserComponent,
    UpgardeComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
