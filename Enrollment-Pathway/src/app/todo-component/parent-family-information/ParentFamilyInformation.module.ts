import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ParentFamilyInformationComponent } from './parent-family-information.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, NgbModule],
  declarations: [ParentFamilyInformationComponent],
  exports: [ParentFamilyInformationComponent],
  bootstrap: [ParentFamilyInformationComponent]
})
export class ParentFamilyInformationModule {}
