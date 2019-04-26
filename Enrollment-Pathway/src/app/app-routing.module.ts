import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
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
import { SoarPreparationComponent } from './todo-component/soar-preparation/soar-preparation.component';
import { SoarComponent } from './todo-component/soar/soar.component';
import { RecommendedActivitiesComponent } from './todo-component/recommended-activities/recommended-activities.component';
import { CodeOfConductComponent } from './todo-component/code-of-conduct/code-of-conduct.component';
import { RutgersGlobalComponent } from './todo-component/rutgers-global/rutgers-global.component';
import { FirstGenerationComponent } from './todo-component/first-generation/first-generation.component';
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
import { DisabilityServicesOfficeComponent } from './todo-component/disability-services-office/disability-services-office.component';
import { GetInvolvedComponent } from './todo-component/get-involved/get-involved.component';
import { MyRunComponent } from './todo-component/my-run/my-run.component';
import { InternationalOfficeComponent } from './todo-component/international-office/international-office.component';
import { FirstYearChecklistComponent } from './todo-component/first-year-checklist/first-year-checklist.component';
import { TransferStudentChecklistComponent } from './todo-component/transfer-student-checklist/transfer-student-checklist.component';
import { AthleticsComponent } from './todo-component/athletics/athletics.component';
import { CulturalReligiousComponent } from './todo-component/cultural-religious/cultural-religious.component';
import { RotcProgramComponent} from './todo-component/rotc-program/rotc-program.component';
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
import { DisabilityServicesComponent } from './todo-component/disability-services/disability-services.component';
import { OnlineDirectoryComponent } from './todo-component/online-directory/online-directory.component';
import { ParkingTransportationComponent } from './todo-component/parking-transportation/parking-transportation.component';
import { BarnesNobleComponent } from './todo-component/barnes-noble/barnes-noble.component';
import { StudentAbroadComponent } from './todo-component/student-abroad/student-abroad.component';
import { ChangeOfPlansComponent } from './todo-component/change-of-plans/change-of-plans.component';


const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'todos', component: TodoListComponent },
  { path: 'todos/netID-activation', component: RutgersNetidEmailActivationComponent },
  { path: 'todos/admission-letter', component: ViewAndPrintYourAddmissionLetterComponent },
  { path: 'todos/pre-arrival', component: PreArrivalComponent },
  { path: 'todos/id-card', component: RutgersIdCardComponent },
  { path: 'todos/placement-test', component: PlacementTestComponent },
  { path: 'todos/planning-advising', component: PlanningAdvisingComponent },
  { path: 'todos/orientation', component: OrientationComponent },
  { path: 'todos/soar', component: SoarComponent },
  { path: 'todos/soar-preparation', component: SoarPreparationComponent},
  { path: 'todos/immunizations', component: ImmunizationComponent },
  { path: 'todos/online-modules', component: OnlineModulesComponent },
  { path: 'todos/parent-family-information', component: ParentFamilyInformationComponent },
  { path: 'todos/recommended-activities', component: RecommendedActivitiesComponent },
  { path: 'todos/final-transcript', component: FinalTranscriptComponent },
  { path: 'todos/code-of-conduct', component: CodeOfConductComponent },
  { path: 'todos/rutgers-global', component: RutgersGlobalComponent },
  { path: 'todos/first-generation', component: FirstGenerationComponent },
  { path: 'todos/explore-discover-connect', component: ExploreDiscoverConnectComponent },
  { path: 'todos/advanced-placement', component: AdvancedPlacementComponent },
  { path: 'todos/housing-dining', component: HousingDiningComponent },
  { path: 'todos/go-rutgers', component: GoRutgersComponent },
  { path: 'todos/emergency-contact', component: EmergencyContactComponent },
  { path: 'todos/us-military', component: UsMilitaryComponent },
  { path: 'todos/leadership-program', component: LeadershipProgramComponent },
  { path: 'todos/q-mmunity', component: QMmunityComponent },
  { path: 'todos/lgbtq-resource', component: LgbtqResourceComponent },
  { path: 'todos/academic-integrity', component: AcademicIntegrityComponent },
  { path: 'todos/title-ix', component: TitleIxComponent },
  { path: 'todos/veteran-affairs', component: VeteranAffairsComponent },
  { path: 'todos/disability-services-office', component: DisabilityServicesOfficeComponent },
  { path: 'todos/get-involved', component: GetInvolvedComponent },
  { path: 'todos/my-run', component: MyRunComponent },
  { path: 'todos/international-office', component: InternationalOfficeComponent },
  { path: 'todos/first-year-checklist', component: FirstYearChecklistComponent },
  { path: 'todos/transfer-student-checklist', component: TransferStudentChecklistComponent },
  { path: 'todos/athletics', component: AthleticsComponent },
  { path: 'todos/cultural-religious', component: CulturalReligiousComponent },
  { path: 'todos/rotc-program', component: RotcProgramComponent },
  { path: 'todos/music', component: MusicComponent },
  { path: 'todos/financial-aid', component: FinancialAidComponent },
  { path: 'todos/authorized-user-access', component: AuthorizedUserAccessComponent },
  { path: 'todos/term-bill', component: TermBillComponent },
  { path: 'todos/electronic-direct-deposit', component: ElectronicDirectDepositComponent },
  { path: 'todos/douglass-residential-college', component: DouglassResidentialCollegeComponent },
  { path: 'todos/nontraditional-student', component: NontraditionalStudentComponent },
  { path: 'todos/interest', component: InterestComponent },
  { path: 'todos/undocumented-information', component: UndocumentedInformationComponent },
  { path: 'todos/health-insurance', component: HealthInsuranceComponent },
  { path: 'todos/disability-services', component: DisabilityServicesComponent },
  { path: 'todos/online-directory', component: OnlineDirectoryComponent },
  { path: 'todos/parking-transportation', component: ParkingTransportationComponent },
  { path: 'todos/barnes-noble', component: BarnesNobleComponent },
  { path: 'todos/study-abroad', component: StudentAbroadComponent },
  { path: 'todos/change-of-plans', component: ChangeOfPlansComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


