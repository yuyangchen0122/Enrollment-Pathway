import { Component, OnInit } from '@angular/core';
import { EPApiService } from '../services/epapi.service'
import { ActivatedRoute, Router } from '@angular/router';
import {__param} from 'tslib';

@Component({
  selector: 'app-todo-list-details',
  templateUrl: './todo-list-details.component.html',
  styleUrls: ['./todo-list-details.component.css']
})
export class TodoListDetailsComponent implements OnInit {

  public todosDetails: any = {};
  public loading = false;

  constructor(
    private router: ActivatedRoute,
    private nav: Router,
    private api: EPApiService
  ) {
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.loading = true;
      // @ts-ignore
      this.api.todosDetail(params.id).subscribe(data => {
        this.todosDetails = data;
        this.loading = false;
      });
    });
  }

}
