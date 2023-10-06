import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient : HttpClient) { }

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
