import { Component, OnInit } from '@angular/core';
import {Form, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MustMatch} from './must-match.validator';

@Component({
  selector: 'app-parent-family-information',
  templateUrl: './parent-family-information.component.html',
  styleUrls: ['./parent-family-information.component.css']
})
export class ParentFamilyInformationComponent implements OnInit {

  public checkboxGroupForm: FormGroup;
  public profileForm: FormGroup;
  public radioGroupForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private checkboxBuilder: FormBuilder,
    private radioBuilder: FormBuilder
  ) {}

  ngOnInit() {

    this.profileForm = this.formBuilder.group({
      firstName1: ['', Validators.required],
      lastName1: ['', Validators.required],
      email1: ['', Validators.required],
      telephone1: [''],
      relationship1: [''],
      employer1: [''],
      firstName2: [''],
      lastName2: [''],
      email2: [''],
      telephone2: [''],
      relationship2: [''],
      employer2: ['']
    });

    this.checkboxGroupForm = this.checkboxBuilder.group({
      check: false
    });

    this.radioGroupForm = this.radioBuilder.group({
      choice: ['1', [Validators.required]]
    });

    // this.radioGroupForm = this.formBuilder.group({
    //   'model': 1
    // });
  }

  get f() {
    return this.profileForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.profileForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.profileForm.value));
  }

}
