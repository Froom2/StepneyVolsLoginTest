import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../providers/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.logIn(email, password);
  }
}
