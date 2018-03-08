import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ArriveDepartService } from '../services/arrive.service';
import {Visit} from '../models/visit';

@Component({
  selector: 'app-signin',
  templateUrl: './arrive.component.html',
  styleUrls: ['./arrive.component.css']
})
export class ArriveComponent implements OnInit {
  name: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private arriveDepartService: ArriveDepartService
  ) { }

  ngOnInit() {
  }

  arrive(form: NgForm) {
    this.name = form.value.nameInput;

    this.arriveDepartService.addVisitToPerson(this.arriveDepartService.personId, new Visit());
    // i don't know what a visit is so give it some values?

    this.router.navigate(['thankyou']);
  }
}
