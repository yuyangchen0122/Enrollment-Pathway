import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-lgbtq-resource',
  templateUrl: './lgbtq-resource.component.html',
  styleUrls: ['./lgbtq-resource.component.css']
})
export class LgbtqResourceComponent implements OnInit {

  public checkboxGroupForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.checkboxGroupForm = this.formBuilder.group({
      1: false,
      2: false,
      3: false
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.checkboxGroupForm.valid) {
      return false;
    }
    else{
      alert(JSON.stringify(this.checkboxGroupForm.value));
    }
  }

}
