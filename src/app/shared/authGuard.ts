import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate() {
    if (firebase.auth().currentUser) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
