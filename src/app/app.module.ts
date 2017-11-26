import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { SignInComponent } from './signin/signin.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { ArriveComponent } from './arrive/arrive.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {ArriveService} from './arrive/arrive.service';
import {AuthService} from './providers/auth.service';

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
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
