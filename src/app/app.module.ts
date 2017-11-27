import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { SignInComponent } from './signin/signin.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { ArriveComponent } from './arrive/arrive.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {ArriveService} from './services/arrive.service';
import {AuthService} from './services/auth.service';
import {CanActivateViaAuthGuard} from './shared/authGuard'

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    SignInComponent,
    ThankyouComponent,
    ArriveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ArriveService,
    AuthService,
    CanActivateViaAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
