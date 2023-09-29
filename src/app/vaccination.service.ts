import { Injectable } from '@angular/core';
import { VaccinationCenter } from './vaccination-center';

@Injectable({
  providedIn: 'root'
})
export class VaccinationService {

  CENTERS: VaccinationCenter[] = [
    {id:1, name:"Hôpital central", address:"2 rue de la gare", postalCode:"54500", city:"Vandoeuvre-lès-Nancy"},
    {id:2, name:"Hôpital central 2", address:"3 rue de la gare", postalCode:"54500", city:"Vandoeuvre-lès-Nancy"}
  ]

  constructor() { }

  getAllVaccinationCenter() : VaccinationCenter[]{
    return this.CENTERS;
  }
}
