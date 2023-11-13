import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { VaccinationService } from '../_services/vaccination.service';

const userCountry = "FR";
@Component({
  selector: 'app-board-superadmin',
  templateUrl: './board-superadmin.component.html',
  styleUrls: ['./board-superadmin.component.scss']
})
export class BoardSuperadminComponent implements OnInit {
  content?: string;
  form: any = {
    name: null,
    address: null,
    postalCode: null,
    city: null
  };
  errorMessage = '';
  isCreationFailed = false;
  isCreationSuccess = false;

  constructor(private userService: UserService, private vaccinationService: VaccinationService) { }

  ngOnInit(): void {
    this.userService.getSuperadminBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.content = res.message;
          } catch {
            this.content = `Error with status: ${err.status} - ${err.statusText}`;
          }
        } else {
          this.content = `Error with status: ${err.status}`;
        }
      }
    });
  }

  onSubmit(): void {
    const { name, address, postalCode, city } = this.form;
    
    this.vaccinationService.createCenter(name, address, postalCode, city).subscribe({
      next: data => {

        console.dir(data);
        this.isCreationSuccess = true;
      },
      error: err => {
        this.isCreationFailed = true;
        this.errorMessage = err.error.message;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

}