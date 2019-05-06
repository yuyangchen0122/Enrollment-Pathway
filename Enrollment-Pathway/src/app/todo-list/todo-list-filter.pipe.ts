import { PipeTransform, Pipe } from '@angular/core';
import { TodoListComponent } from './todo-list.component';
import {ITodoListComponent} from './todoList';

@Pipe({
  name: 'todoListFilter'
})
export class TodoListFilterPipe implements PipeTransform {

  transform(value: ITodoListComponent[], filterBy: string): ITodoListComponent[] {

    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ?
      value.filter((ITodoListComponent: TodoListComponent) =>
        (ITodoListComponent.title ? ITodoListComponent.title : "").toLocaleLowerCase().indexOf(filterBy) !== -1
        // || (universityAlert.description ? universityAlert.description : "").toLocaleLowerCase().indexOf(filterBy) !== -1
      )
      : value;
  }
}
