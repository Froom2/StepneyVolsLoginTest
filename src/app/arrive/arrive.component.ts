import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ArriveDepartService } from '../services/arrive.service';

@Component({
  selector: 'app-signin',
  templateUrl: './arrive.component.html',
  styleUrls: ['./arrive.component.css']
})
export class ArriveComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private arriveDepartService: ArriveDepartService
  ) { }

  ngOnInit() {
  }

  name: string;
  
  arrive(form: NgForm) {
    this.name = form.value.nameInput;

    this.arriveDepartService.addVisitToPerson(this.name);

    this.router.navigate(['thankyou']);
  }
}
