import { Component } from '@angular/core';
import { VaccinationService } from '../_services/vaccination.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent {

  patients!: Patient[];
  selected?: Patient;

  constructor(private service: VaccinationService) {}

  ngOnInit(): void {
    this.service.getAllPatient().subscribe(resultPatients=>{
      this.patients = resultPatients;
    });
  }

  selectPatient(patient: Patient){
    this.selected=patient;
  }

  onDeleted(patient: Patient){
    delete this.selected;
    this.patients.splice(this.patients.indexOf(patient), 1);
  }
}
