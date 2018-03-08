import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { SignInComponent } from './signin/signin.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { ArriveComponent } from './arrive/arrive.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {ArriveDepartService} from './services/arrive.service';
import {AuthService} from './services/auth.service';
import {CanActivateViaAuthGuard} from './shared/authGuard';
import { DepartComponent } from './depart/depart.component';
import { VisitReasonComponent } from './visit-reason/visit-reason.component'

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    SignInComponent,
    ThankyouComponent,
    ArriveComponent,
    DepartComponent,
    VisitReasonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ArriveDepartService,
    AuthService,
    CanActivateViaAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
