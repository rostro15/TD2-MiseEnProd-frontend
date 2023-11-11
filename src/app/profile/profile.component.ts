import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { AuthService } from '../_services/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  form: any = {
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: ""
  };
  isSuccessful = false;
  isEditProfileFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
  }

  onSubmit(): void {
    const { email, password, firstName, lastName, phone } = this.form;
    const username = this.currentUser.username;

    this.authService.edit(username, email, password, firstName, lastName, phone).subscribe({
      next: data => {
        this.isSuccessful = true;
        setTimeout(() => {  
          this.logout();
        }, 2000);
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isEditProfileFailed = true;
      }
    });
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        this.storageService.clean();
        window.location.reload();
        window.location.replace("/login");
      },
      error: err => {
        console.dir(err);
      }
    });
  }
  
}