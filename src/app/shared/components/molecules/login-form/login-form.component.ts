import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  email: string = '';
  password: string = '';

  get formValid(): boolean {
    return this.email.trim().length > 0 && this.password.trim().length > 0;
  }

  onSubmit(): void {
    // Handle form submission
  }
}
