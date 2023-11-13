import { APP_ID, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpStatusCode } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VaccinationCenter } from '../vaccination-center';
import { Patient } from '../patient';

const AUTH_API = '/api/public/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VaccinationService {

  constructor(private http : HttpClient) { }

  getAllVaccinationCenter() : Observable<VaccinationCenter[]>{
    return this.http.get<VaccinationCenter[]>(AUTH_API + "centers");
  }

  getCenterById(id: Number) : Observable<VaccinationCenter> {
    return this.http.get<VaccinationCenter>(AUTH_API + "center/"+id);
  }

  createCenter(name: string, address: string, postalCode: string, city:string): Observable<any> {
    return this.http.post(
      AUTH_API + '/',
      {
        name,
        address,
        postalCode,
        city
      },
      httpOptions
    );
  }

  deleteCenter(id: Number) : Observable<HttpStatusCode> {
    return this.http.delete<HttpStatusCode>(AUTH_API + "center/"+id);
  }

  getAllPatient() : Observable<Patient[]>{
    return this.http.get<Patient[]>(AUTH_API + "patients");
  }

  getPatientById(id: Number) : Observable<Patient> {
    return this.http.get<Patient>(AUTH_API + "patient/"+id);
  }

  deletePatient(id: Number) : Observable<HttpStatusCode> {
    return this.http.delete<HttpStatusCode>(AUTH_API + "patient/"+id);
  }
  
  /*
  createBooking(book: Booking): Observable<Booking>{
    return this.http.post("booking", book);
  */
}
