import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaccinationCenterListComponent } from './vaccination-center-list/vaccination-center-list.component';
import { VaccinationCenterComponent } from './vaccination-center/vaccination-center.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientComponent } from './patient/patient.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardSuperadminComponent } from './board-superadmin/board-superadmin.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

const routes: Routes = [
  { path: "centers", component : VaccinationCenterListComponent },
  { path: "center/detail/:id", component : VaccinationCenterComponent },
  { path: "patients", component : PatientListComponent },
  { path: "patient/detail/:id", component : PatientComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'superadmin', component: BoardSuperadminComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
