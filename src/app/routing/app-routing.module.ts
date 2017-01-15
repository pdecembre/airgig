import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';


import { APP_ROUTES } from './APP_ROUTES';

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, {initialNavigation: false})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}