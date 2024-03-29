import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from './signin/signin.component';
import {StartComponent} from './start/start.component';
import {ThankyouComponent} from './thankyou/thankyou.component';
import {ArriveComponent} from './arrive/arrive.component';
import {DepartComponent} from './depart/depart.component';
import {CanActivateViaAuthGuard} from './shared/authGuard';

const appRoutes: Routes = [
    { path: '', component: SignInComponent },
    { path: 'start', component: StartComponent, canActivate: [CanActivateViaAuthGuard] },
    { path: 'thankyou', component: ThankyouComponent, canActivate: [CanActivateViaAuthGuard] },
    { path: 'arrive', component: ArriveComponent, canActivate: [CanActivateViaAuthGuard] },
    { path: 'depart', component: DepartComponent, canActivate: [CanActivateViaAuthGuard] }
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