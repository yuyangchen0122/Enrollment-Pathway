import { Component, OnInit } from '@angular/core';
import { EPApiService } from '../services/epapi.service';

@Component({
  selector: 'app-sidebars',
  templateUrl: './sidebars.component.html',
  styleUrls: ['./sidebars.component.css']
})
export class SidebarsComponent implements OnInit {

  filters: any[];
  tags: any[];

  constructor(
    private api: EPApiService
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    this.api.todosDetail().subscribe(filters => {
      this.filters = filters;
    });

    // @ts-ignore
    this.api.todosDetail().subscribe(tags => {
      this.tags = tags;
    });
  }

}
