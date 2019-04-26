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
import { PreArrivalComponent } from './todo-component/pre-arrival/pre-arrival.component';
import { PlanningAdvisingComponent } from './todo-component/planning-advising/planning-advising.component';
import { OrientationComponent } from './todo-component/orientation/orientation.component';
import { SoarComponent } from './todo-component/soar/soar.component';
import { SoarPreparationComponent } from './todo-component/soar-preparation/soar-preparation.component';
import { RecommendedActivitiesComponent } from './todo-component/recommended-activities/recommended-activities.component';
import { RutgersGlobalComponent } from './todo-component/rutgers-global/rutgers-global.component';
import { FirstGenerationComponent } from './todo-component/first-generation/first-generation.component';
import { CodeOfConductComponent } from './todo-component/code-of-conduct/code-of-conduct.component';
import { ExploreDiscoverConnectComponent } from './todo-component/explore-discover-connect/explore-discover-connect.component';
import { AdvancedPlacementComponent } from './todo-component/advanced-placement/advanced-placement.component';
import { HousingDiningComponent } from './todo-component/housing-dining/housing-dining.component';
import { GoRutgersComponent } from './todo-component/go-rutgers/go-rutgers.component';
import { UsMilitaryComponent } from './todo-component/us-military/us-military.component';
import { LeadershipProgramComponent } from './todo-component/leadership-program/leadership-program.component';
import { QMmunityComponent } from './todo-component/q-mmunity/q-mmunity.component';
import { LgbtqResourceComponent } from './todo-component/lgbtq-resource/lgbtq-resource.component';
import { AcademicIntegrityComponent } from './todo-component/academic-integrity/academic-integrity.component';
import { TitleIxComponent } from './todo-component/title-ix/title-ix.component';
import { VeteranAffairsComponent } from './todo-component/veteran-affairs/veteran-affairs.component';
import { DisabilityServicesComponent } from './todo-component/disability-services/disability-services.component';
import { GetInvolvedComponent } from './todo-component/get-involved/get-involved.component';
import { MyRunComponent } from './todo-component/my-run/my-run.component';
import { InternationalOfficeComponent } from './todo-component/international-office/international-office.component';
import { FirstYearChecklistComponent } from './todo-component/first-year-checklist/first-year-checklist.component';
import { TransferStudentChecklistComponent } from './todo-component/transfer-student-checklist/transfer-student-checklist.component';
import { AthleticsComponent } from './todo-component/athletics/athletics.component';
import { CulturalReligiousComponent } from './todo-component/cultural-religious/cultural-religious.component';
import { RotcProgramComponent } from './todo-component/rotc-program/rotc-program.component';
import { MusicComponent } from './todo-component/music/music.component';
import { FinancialAidComponent } from './todo-component/financial-aid/financial-aid.component';
import { AuthorizedUserAccessComponent } from './todo-component/authorized-user-access/authorized-user-access.component';
import { TermBillComponent } from './todo-component/term-bill/term-bill.component';
import { ElectronicDirectDepositComponent } from './todo-component/electronic-direct-deposit/electronic-direct-deposit.component';
import { DouglassResidentialCollegeComponent } from './todo-component/douglass-residential-college/douglass-residential-college.component';
import { NontraditionalStudentComponent } from './todo-component/nontraditional-student/nontraditional-student.component';
import { InterestComponent } from './todo-component/interest/interest.component';
import { UndocumentedInformationComponent } from './todo-component/undocumented-information/undocumented-information.component';
import { HealthInsuranceComponent } from './todo-component/health-insurance/health-insurance.component';
import { OnlineDirectoryComponent } from './todo-component/online-directory/online-directory.component';
import { DisabilityServicesOfficeComponent } from './todo-component/disability-services-office/disability-services-office.component';
import { ParkingTransportationComponent } from './todo-component/parking-transportation/parking-transportation.component';
import { BarnesNobleComponent } from './todo-component/barnes-noble/barnes-noble.component';
import { StudentAbroadComponent } from './todo-component/student-abroad/student-abroad.component';
import { ChangeOfPlansComponent } from './todo-component/change-of-plans/change-of-plans.component';

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
    ParentFamilyInformationComponent,
    PreArrivalComponent,
    PlanningAdvisingComponent,
    OrientationComponent,
    SoarComponent,
    SoarPreparationComponent,
    RecommendedActivitiesComponent,
    RutgersGlobalComponent,
    FirstGenerationComponent,
    CodeOfConductComponent,
    ExploreDiscoverConnectComponent,
    AdvancedPlacementComponent,
    HousingDiningComponent,
    GoRutgersComponent,
    UsMilitaryComponent,
    LeadershipProgramComponent,
    QMmunityComponent,
    LgbtqResourceComponent,
    AcademicIntegrityComponent,
    TitleIxComponent,
    VeteranAffairsComponent,
    DisabilityServicesComponent,
    GetInvolvedComponent,
    MyRunComponent,
    InternationalOfficeComponent,
    FirstYearChecklistComponent,
    TransferStudentChecklistComponent,
    AthleticsComponent,
    CulturalReligiousComponent,
    RotcProgramComponent,
    MusicComponent,
    FinancialAidComponent,
    AuthorizedUserAccessComponent,
    TermBillComponent,
    ElectronicDirectDepositComponent,
    DouglassResidentialCollegeComponent,
    NontraditionalStudentComponent,
    InterestComponent,
    UndocumentedInformationComponent,
    HealthInsuranceComponent,
    OnlineDirectoryComponent,
    DisabilityServicesOfficeComponent,
    ParkingTransportationComponent,
    BarnesNobleComponent,
    StudentAbroadComponent,
    ChangeOfPlansComponent
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
