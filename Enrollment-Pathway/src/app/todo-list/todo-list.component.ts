import { Component, OnInit } from '@angular/core';
import { EPApiService } from '../services/epapi.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todos = [];
  public loading = false;
  public checkboxGroupForm: FormGroup;

  constructor(
    private api: EPApiService,
    private modal: NgbModal,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.loading = true;
    this.api.getTodosList().subscribe(data => {
      this.todos = data;
      this.loading = false;
    });
  }
}
