import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.scss'
})
export class LoginModalComponent {

  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<LoginModalComponent>,
  ) {
    this.formValid = this.checkFormValidity();
  }
  formValid: boolean = false; // Inicializar la propiedad formValid

  checkFormValidity(): boolean {
    // Implementa tu lógica para verificar la validez del formulario
    return true; // Por ejemplo, retorna true si el formulario es válido
  }

  onSubmit(): void {
    // Implementa la lógica para manejar el evento de submit
    console.log('Form submitted!');
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  handleSubmit(): void {
    // Lógica para manejar el submit del formulario
  }

  onClick(): void {
    this.router.navigate(['']);
  }

}
