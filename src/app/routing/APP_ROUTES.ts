import { RouterModule, Routes }  from '@angular/router';
import { LoginComponent } from './../account/login/login.component';


export const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent }
];