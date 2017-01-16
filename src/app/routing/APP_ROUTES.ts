import { RouterModule, Routes }  from '@angular/router';
import { LoginComponent } from './../account/login/login.component';
import { DashboardComponent } from './../dashboard/dashboard.component';

export const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent }

];