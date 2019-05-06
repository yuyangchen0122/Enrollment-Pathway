import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-nontraditional-student',
  templateUrl: './nontraditional-student.component.html',
  styleUrls: ['./nontraditional-student.component.css']
})
export class NontraditionalStudentComponent implements OnInit {

  public radioGroupForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.radioGroupForm = this.formBuilder.group({
      choice: ['1', [Validators.required]],
    });
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
