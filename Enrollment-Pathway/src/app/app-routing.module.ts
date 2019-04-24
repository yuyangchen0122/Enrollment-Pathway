import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { RutgersNetidEmailActivationComponent } from './required-items/rutgers-netid-email-activation/rutgers-netid-email-activation.component';
import { ViewAndPrintYourAddmissionLetterComponent } from './required-items/view-and-print-your-addmission-letter/view-and-print-your-addmission-letter.component';
import { RutgersIdCardComponent } from './required-items/rutgers-id-card/rutgers-id-card.component';


const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'todos', component: TodoListComponent },
  { path: 'todos/1', component: RutgersNetidEmailActivationComponent},
  { path: 'todos/2', component: ViewAndPrintYourAddmissionLetterComponent},
  { path: 'todos/4', component: RutgersIdCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


