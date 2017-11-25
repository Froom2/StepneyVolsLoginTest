import {Injectable, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class AuthService {

  loggedIn = false;
  loggedInChanged = new Subject<boolean>();

  constructor(private router: Router) { }

  logIn(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {


          this.router.navigate(['start']);


          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.loggedIn = true;
                this.loggedInChanged.next(this.loggedIn);
              },
              err => {
                console.error(`no user returned, error: ${err}`);
              }
            );


        },
        err => {
          console.error(`login failed, error: ${err}`);
        }
      )
      .catch(
        err => console.log(`login failed, error: ${err}`)
      );
  }

}
