import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: any = {
    username: null,
    email: null,
    password: null,
    firstName: null,
    lastName: null,
    phone: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  onSubmit(): void {
    const { username, email, password, firstName, lastName, phone } = this.form;

    this.authService.register(username, email, password, firstName, lastName, phone).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        window.location.replace("/login");
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}