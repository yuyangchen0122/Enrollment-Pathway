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
import { RutgersNetidEmailActivationComponent } from './required-items/rutgers-netid-email-activation/rutgers-netid-email-activation.component';
import { ViewAndPrintYourAddmissionLetterComponent } from './required-items/view-and-print-your-addmission-letter/view-and-print-your-addmission-letter.component';
import { RutgersIdCardComponent } from './required-items/rutgers-id-card/rutgers-id-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    NavMenuComponent,
    RutgersNetidEmailActivationComponent,
    ViewAndPrintYourAddmissionLetterComponent,
    RutgersIdCardComponent
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
