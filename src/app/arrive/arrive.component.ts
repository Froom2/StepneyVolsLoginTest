import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ArriveService } from './arrive.service';

@Component({
  selector: 'app-signin',
  templateUrl: './arrive.component.html',
  styleUrls: ['./arrive.component.css']
})
export class ArriveComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private arriveService: ArriveService
  ) { }

  ngOnInit() {
  }

  name: string;
  
  signIn(form: NgForm) {
    this.name = form.value.nameInput;

    this.arriveService.addSignedInUser(this.name);

    this.router.navigate(['thankyou']);
  }
}
