import { Component } from '@angular/core';
import { VaccinationService } from '../_services/vaccination.service';
import { Patient } from '../patient';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent {

  patients!: Patient[];
  selected?: Patient;
  dataSource = new MatTableDataSource<Patient>;

  constructor(private service: VaccinationService) {}

  ngOnInit(): void {
    this.service.getAllPatient().subscribe(resultPatients=>{
      this.patients = resultPatients;
      this.dataSource = new MatTableDataSource<Patient>(resultPatients);
    });
  }

  selectPatient(patient: Patient){
    this.selected=patient;
  }

  onDeleted(patient: Patient){
    delete this.selected;
    this.patients.splice(this.patients.indexOf(patient), 1);
  }

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'nbVaccin', 'actions'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
