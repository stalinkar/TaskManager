import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { MyProfileComponent } from './my-profile/my-profile.component';



@NgModule({
  declarations: [DashboardComponent,AboutComponent,MyProfileComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
