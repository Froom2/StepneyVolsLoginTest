import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from './signin/signin.component';
import {StartComponent} from './start/start.component';
import {ThankyouComponent} from './thankyou/thankyou.component';
import {ArriveComponent} from './arrive/arrive.component';

const appRoutes: Routes = [
    { path: '', component: SignInComponent },
    { path: 'start', component: StartComponent},
    { path: 'thankyou', component: ThankyouComponent},
    { path: 'arrive', component: ArriveComponent}
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