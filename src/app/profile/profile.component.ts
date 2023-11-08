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
    username: null,
    email: null,
    password: null,
    firstName: null,
    lastName: null,
    phone: null
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
        console.log(data);
        //this.isSuccessful = true;
        this.isEditProfileFailed = true;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isEditProfileFailed = true;
      }
    });
  }
}