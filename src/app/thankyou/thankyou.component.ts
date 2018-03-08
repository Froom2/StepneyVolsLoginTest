import { Component, OnInit } from '@angular/core';
import { ArriveDepartService } from '../services/arrive.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  name: string;

  constructor(
    private arriveService: ArriveDepartService,
    private router: Router
  ) { }

  ngOnInit() {
    this.name = this.arriveService.getArrivedUser();

    setTimeout((router: Router) => {
      this.router.navigate(['start']);
    }, 3000);
  }
}
