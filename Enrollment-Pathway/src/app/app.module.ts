import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Third Party Components
import { NgxLoadingModule} from 'ngx-loading';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { EPApiService } from 'src/app/services/epapi.service';
import { TodoListDetailsComponent } from './todo-list-details/todo-list-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    NavMenuComponent,
    TodoListDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [
    EPApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
