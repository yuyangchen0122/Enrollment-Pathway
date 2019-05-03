import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cultural-religious',
  templateUrl: './cultural-religious.component.html',
  styleUrls: ['./cultural-religious.component.css']
})
export class CulturalReligiousComponent implements OnInit {

  public radioGroupForm: FormGroup;
  public checkboxGroupForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private fb: FormBuilder
              ) { }

  ngOnInit() {
    this.radioGroupForm = this.formBuilder.group({
      choice: ['1', [Validators.required]],
    });

    this.checkboxGroupForm = this.fb.group({
      checkbox: false
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.radioGroupForm.valid) {
      return false;
    } else {
      alert(JSON.stringify(this.radioGroupForm.value));
    }
    if (!this.checkboxGroupForm.valid) {
      return false;
    }
    else {
      alert(JSON.stringify(this.checkboxGroupForm.value));
    }
  }

}
