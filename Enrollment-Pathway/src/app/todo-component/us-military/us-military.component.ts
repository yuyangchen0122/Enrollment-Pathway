import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-us-military',
  templateUrl: './us-military.component.html',
  styleUrls: ['./us-military.component.css']
})
export class UsMilitaryComponent implements OnInit {

  submitted = false;
  public radioGroupForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.radioGroupForm = this.fb.group({
      choice: ['1', [Validators.required]],
    });
  }

  get myForm() {
    return this.radioGroupForm.get('choice');
  }

  onSubmit() {
    this.submitted = true;
    if (!this.radioGroupForm.valid) {
      return false;
    } else {
      alert(JSON.stringify(this.radioGroupForm.value));
    }
  }
}
