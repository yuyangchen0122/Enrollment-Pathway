import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListDetailsComponent} from './todo-list-details/todo-list-details.component';

const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'todos', component: TodoListComponent },
  { path: 'todos/:id', component: TodoListDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


