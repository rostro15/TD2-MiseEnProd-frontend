import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VaccinationService } from '../_services/vaccination.service';
import { Patient } from '../patient';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  
  @Input() patient?: Patient;
  @Output() deleted = new EventEmitter<Patient>();

  constructor(private route: ActivatedRoute, private service: VaccinationService) {}
  
  delete(id: Number){
    this.deleted.emit(this.patient);
    console.log(id);
    this.service.deletePatient(id).subscribe(data=>{
      console.log(data);
    });;
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.service.getPatientById(id).subscribe(resultPatient=>{
      this.patient = resultPatient;
    });
  }


}
