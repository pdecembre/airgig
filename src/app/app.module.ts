import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AngularFireModule} from 'angularfire2';
import { FIREBASE_AIRGIG_CONFIG, FIREBASE_AIRGIG_AUTH_CONFIG } from './firebase-config/airgig.firebase.config';


import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './account/login/login.component';
import { AuthService } from './services/auth/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(FIREBASE_AIRGIG_CONFIG, FIREBASE_AIRGIG_AUTH_CONFIG)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
