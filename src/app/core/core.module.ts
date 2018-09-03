import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainHeaderComponent} from './main-header/main-header.component';
import {SideNavComponent} from './side-nav/side-nav.component';
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [MainHeaderComponent, SideNavComponent, LoginComponent],
  exports: [MainHeaderComponent, SideNavComponent, LoginComponent]

})
export class CoreModule {
}
