import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  constructor(private router: Router) { }

  onClick(): void {
    // Navegar a la página Home cuando se hace clic en el botón
    this.router.navigate(['/']);
  }
}
