import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaccinationCenterListComponent } from './vaccination-center-list/vaccination-center-list.component';
import { VaccinationCenterComponent } from './vaccination-center/vaccination-center.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientComponent } from './patient/patient.component';

const routes: Routes = [
  { path: "", redirectTo: "/centers", pathMatch: "full" },
  { path: "centers", component : VaccinationCenterListComponent },
  { path: "center/detail/:id", component : VaccinationCenterComponent },
  { path: "patients", component : PatientListComponent },
  { path: "patient/detail/:id", component : PatientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
