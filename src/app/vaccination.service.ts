import { Injectable } from '@angular/core';
import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VaccinationCenter } from './vaccination-center';
import { Patient } from './patient';

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

  deleteCenter(id: Number) : Observable<HttpStatusCode> {
    return this.httpClient.delete<HttpStatusCode>("api/public/center/"+id);
  }

  getAllPatient() : Observable<Patient[]>{
    return this.httpClient.get<Patient[]>("api/public/patients");
  }

  getPatientById(id: Number) : Observable<Patient> {
    return this.httpClient.get<Patient>("api/public/patient/"+id);
  }

  deletePatient(id: Number) : Observable<HttpStatusCode> {
    return this.httpClient.delete<HttpStatusCode>("api/public/patient/"+id);
  }
  /*
  createBooking(book: Booking): Observable<Booking>{
    return this.httpClient.post("/api/public/booking", book);
  */
}
