import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  public checkboxGroupForm: FormGroup;
  public radioGroupForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.radioGroupForm = this.fb.group({
      choice: ['1', [Validators.required]],
    });
    this.checkboxGroupForm = this.formBuilder.group({
      allMixedChoirs: false,
      windEnsembleConcertBand: false,
      gleeClubMen: false,
      voorheesChoirWomen: false,
      marchingBand: false,
      pepBand: false,
      jazzEnsemblesCombos: false,
      universityOrchestras: false,
      band: false,
      choir: false,
      jazzband: false,
      orchestra: false,
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
