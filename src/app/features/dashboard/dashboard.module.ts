import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([{
      path: 'dashboard', pathMatch: 'full', component: DashboardComponent
    }])
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {
}
