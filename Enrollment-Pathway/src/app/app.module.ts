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
import { RutgersNetidEmailActivationComponent } from './todo-component/netID-activation/rutgers-netid-email-activation.component';
import { ViewAndPrintYourAddmissionLetterComponent } from './todo-component/admission-letter/view-and-print-your-addmission-letter.component';
import { RutgersIdCardComponent } from './todo-component/id-card/rutgers-id-card.component';
import { PlacementTestComponent } from './todo-component/placement-test/placement-test.component';
import { ImmunizationComponent } from './todo-component/immunization/immunization.component';
import { EmergencyContactComponent } from './todo-component/emergency-contact/emergency-contact.component';
import { FinalTranscriptComponent } from './todo-component/final-transcript/final-transcript.component';
import { OnlineModulesComponent } from './todo-component/online-modules/online-modules.component';
import { ParentFamilyInformationComponent } from './todo-component/parent-family-information/parent-family-information.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    NavMenuComponent,
    RutgersNetidEmailActivationComponent,
    ViewAndPrintYourAddmissionLetterComponent,
    RutgersIdCardComponent,
    PlacementTestComponent,
    ImmunizationComponent,
    EmergencyContactComponent,
    FinalTranscriptComponent,
    OnlineModulesComponent,
    ParentFamilyInformationComponent
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
