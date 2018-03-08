import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ArriveDepartService } from '../services/arrive.service';

@Component({
  selector: 'app-signin',
  templateUrl: './depart.component.html',
  styleUrls: ['./depart.component.css']
})
export class DepartComponent implements OnInit {

  name: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private arriveDepartService: ArriveDepartService
  ) { }

  ngOnInit() {
  }

  depart(form: NgForm) {
    this.name = form.value.nameInput;

    this.arriveDepartService.departUser(this.name);

    this.router.navigate(['thankyou']);
  }
}
