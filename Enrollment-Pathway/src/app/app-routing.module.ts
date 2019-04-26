import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { RutgersNetidEmailActivationComponent } from './todo-component/netID-activation/rutgers-netid-email-activation.component';
import { ViewAndPrintYourAddmissionLetterComponent } from './todo-component/admission-letter/view-and-print-your-addmission-letter.component';
import { RutgersIdCardComponent } from './todo-component/id-card/rutgers-id-card.component';
import { PlacementTestComponent } from './todo-component/placement-test/placement-test.component';
import { ImmunizationComponent } from './todo-component/immunization/immunization.component';
import {EmergencyContactComponent} from './todo-component/emergency-contact/emergency-contact.component';
import {FinalTranscriptComponent} from './todo-component/final-transcript/final-transcript.component';
import {OnlineModulesComponent} from './todo-component/online-modules/online-modules.component';
import {ParentFamilyInformationComponent} from './todo-component/parent-family-information/parent-family-information.component';


const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'todos', component: TodoListComponent },
  { path: 'todos/netID-activation', component: RutgersNetidEmailActivationComponent },
  { path: 'todos/admission-letter', component: ViewAndPrintYourAddmissionLetterComponent },
  { path: 'todos/id-card', component: RutgersIdCardComponent },
  { path: 'todos/placement-test', component: PlacementTestComponent },
  { path: 'todos/immunizations', component: ImmunizationComponent },
  { path: 'todos/emergency-contact', component: EmergencyContactComponent },
  { path: 'todos/final-transcript', component: FinalTranscriptComponent },
  { path: 'todos/online-modules', component: OnlineModulesComponent },
  { path: 'todos/parent-family-information', component: ParentFamilyInformationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


