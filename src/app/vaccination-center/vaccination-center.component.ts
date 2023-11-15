import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VaccinationService } from '../_services/vaccination.service';
import { VaccinationCenter } from '../vaccination-center';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-vaccination-center',
  templateUrl: './vaccination-center.component.html',
  styleUrls: ['./vaccination-center.component.scss']
})

export class VaccinationCenterComponent implements OnInit {

  @Input() center?: VaccinationCenter;
  @Output() deleted = new EventEmitter<VaccinationCenter>();
  isSuperAdmin = false;

  constructor(private route: ActivatedRoute, private service: VaccinationService, private storageService: StorageService) {}
  
  delete(id: Number){
    this.deleted.emit(this.center);
    console.log(id);
    this.service.deleteCenter(id).subscribe(data=>{
      console.log(data);
    });;
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.service.getCenterById(id).subscribe(resultCenter=>{
      this.center = resultCenter;
    });

    this.isSuperAdmin = this.storageService.isSuperAdmin();
  }

}

