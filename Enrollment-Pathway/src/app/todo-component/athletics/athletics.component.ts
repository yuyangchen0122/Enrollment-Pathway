import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-athletics',
  templateUrl: './athletics.component.html',
  styleUrls: ['./athletics.component.css']
})
export class AthleticsComponent implements OnInit {

  public radioGroupForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.radioGroupForm = this.formBuilder.group({
      baseball_men_intercollegiate: false,
      basketball_men_women_intercollegiate: false,
      crew_men_intercollegiate: false,
      rowing_women_intercollegiate: false,
      cross_country_men_women_intercollegiate: false,
      fencing_men_women_intercollegiate: false,
      field_hockey_women_intercollegiate: false,
      football_men_intercollegiate: false,
      golf_men_women_intercollegiate: false,
      gymnastics_women_intercollegiate: false,
      lacrosse_men_women_intercollegiate: false,
      soccer_men_women_intercollegiate: false,
      softball_women_intercollegiate: false,
      swimming_diving_men_intercollegiate: false,
      swimming_diving_women_intercollegiate: false,
      tennis_men_intercollegiate: false,
      tennis_women_intercollegiate: false,
      track_men_women_intercollegiate: false,
      baseball_men_recreational: false,
      basketball_men_women_recreational: false,
      crew_men_recreational: false,
      rowing_women_recreational: false,
      cross_country_men_women_recreational: false,
      fencing_men_women_recreational: false,
      field_hockey_women_recreational: false,
      football_men_recreational: false,
      golf_men_women_recreational: false,
      gymnastics_women_recreational: false,
      lacrosse_men_women_recreational: false,
      soccer_men_women_recreational: false,
      softball_women_recreational: false,
      swimming_diving_men_recreational: false,
      swimming_diving_women_recreational: false,
      tennis_men_recreational: false,
      tennis_women_recreational: false,
      track_men_women_recreational: false
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
