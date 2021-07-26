import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  // TODO: take care of this??
  maxDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
    this.maxDate = new Date();
  }

  onSubmit(form: NgForm) {

  }

}
