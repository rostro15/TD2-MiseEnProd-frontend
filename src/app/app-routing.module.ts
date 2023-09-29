import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaccinationCenterComponent } from './vaccination-center/vaccination-center.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: "/center", component : AppComponent },
  { path: "", redirectTo: "/center", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
