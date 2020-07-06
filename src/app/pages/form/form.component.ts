import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.styl']
})
export class FormComponent implements OnInit {
  title = "Forms"
  myForm: FormGroup = new FormGroup({
    "name": new FormControl('', Validators.required),
    "phone": new FormControl('', Validators.required),
    "age": new FormControl("")
  })

  /**
   * send form
   */

  submit() {
    console.log('submit');
  }


  constructor() { }

  ngOnInit(): void {
  }

}
