import { Component, OnInit } from '@angular/core';
import { EPApiService } from '../services/epapi.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {TodoListDetailsComponent} from '../todo-list-details/todo-list-details.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todos = [];
  public loading = false;

  constructor(private api: EPApiService, private modal: NgbModal) { }

  ngOnInit() {
    this.loading = true;
    this.api.getTodosList().subscribe(data => {
      this.todos = data;
      this.loading = false;
    });
  }
}
