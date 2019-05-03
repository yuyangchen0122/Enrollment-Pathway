import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UsMilitaryComponent } from './us-military.component'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsMilitaryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [UsMilitaryComponent]
})
export class UsMilitaryComponentModule { }
