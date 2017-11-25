import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from './signin/signin.component';
import {StartComponent} from './start/start.component';
import {ThankyouComponent} from './thankyou/thankyou.component';
import {ArriveComponent} from './arrive/arrive.component';

const appRoutes: Routes = [
    { path: '', component: StartComponent},
    { path: 'signin', component: SignInComponent },
    { path: 'thankyou', component: ThankyouComponent}
]

@NgModule({
   imports: [
       RouterModule.forRoot(appRoutes)
   ],
   exports: [
       RouterModule
   ]
})
export class AppRoutingModule {

}