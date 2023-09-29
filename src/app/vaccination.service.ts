import { Injectable } from '@angular/core';
import { VaccinationCenter } from './vaccination-center';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VaccinationService {

  CENTERS: VaccinationCenter[] = [
    {id:1, name:"Hôpital central", address:"2 rue de la gare", postalCode:"54519", city:"Vandoeuvre-lès-Nancy"},
    {id:2, name:"Hôpital pas central", address:"3 rue de la gare", postalCode:"54500", city:"Vandoeuvre-lès-Nancy"}
  ]

  constructor(private httpClient : HttpClient) { }

  getAllVaccinationCenter() : Observable<VaccinationCenter[]>{
    return this.httpClient.get<VaccinationCenter[]>("api/public/centers");
  }

  getCenterById(id: Number) : Observable<VaccinationCenter> {
    return this.httpClient.get<VaccinationCenter>("api/public/center/"+id);
  }

  /*
  createBooking(book: Booking): Observable<Booking>{
    return this.httpClient.post("/api/public/booking", book);
  */
}
