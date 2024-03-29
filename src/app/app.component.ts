import { Component, OnInit } from '@angular/core';
import {environment} from '../environments/environment.prod';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    firebase.initializeApp(environment.fireBase);
  }
}
