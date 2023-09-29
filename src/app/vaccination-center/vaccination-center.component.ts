import { Component } from '@angular/core';
import { VaccinationCenter } from '../vaccination-center';

@Component({
  selector: 'app-vaccination-center',
  templateUrl: './vaccination-center.component.html',
  styleUrls: ['./vaccination-center.component.scss']
})
export class VaccinationCenterComponent {

  center:VaccinationCenter = {
    id: 1,
    name: 'Centre de Nancy',
    address: '1 rue de la République',
    postalCode: '54000',
    city: 'Nancy'
  }
  
  clearName(): void {
    this.center.name = '';
  }

}

