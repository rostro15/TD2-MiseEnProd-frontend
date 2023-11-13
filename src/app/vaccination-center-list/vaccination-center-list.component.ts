import { Component, OnInit } from '@angular/core';
import { VaccinationService } from '../_services/vaccination.service';
import { VaccinationCenter } from '../vaccination-center';

@Component({
  selector: 'app-vaccination-center-list',
  templateUrl: './vaccination-center-list.component.html',
  styleUrls: ['./vaccination-center-list.component.scss']
})
export class VaccinationCenterListComponent implements OnInit {
  
  centers!: VaccinationCenter[];
  selected?: VaccinationCenter;

  constructor(private service: VaccinationService) {}

  ngOnInit(): void {
    this.service.getAllVaccinationCenter().subscribe(resultCenters=>{
      this.centers = resultCenters;
    });
  }

  isSpecialCenter(center: VaccinationCenter){
    return center.city == "Nancy";
  }

  selectCenter(center: VaccinationCenter){
    this.selected=center;
  }

  onDeleted(center: VaccinationCenter){
    delete this.selected;
    this.centers.splice(this.centers.indexOf(center), 1);
  }
}

