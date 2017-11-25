import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { SignInComponent } from './signin/signin.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { ArriveComponent } from './arrive/arrive.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    SignInComponent,
    ThankyouComponent,
    ArriveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
