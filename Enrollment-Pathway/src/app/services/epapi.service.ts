import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EPApiService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getTodosList() {
    return this.http.get<any[]>(`${this.baseUrl}/todos`);
  }

  todosDetail(id) {
    return this.http.get<any>(`${this.baseUrl}/todos/${id}`);
  }

}
