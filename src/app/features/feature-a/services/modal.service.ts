import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginModalComponent } from '../../../shared/components/organisms/login-modal/login-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public modalVisible: boolean = false;
  private dialogRef: MatDialogRef<LoginModalComponent> | null = null;

  constructor(private dialog: MatDialog) {}

  openModal(): void {
    this.modalVisible = true;
    // Abre el modal utilizando MatDialog y guarda la referencia
    this.dialogRef = this.dialog.open(LoginModalComponent);

    // Maneja el evento de cierre del modal
    this.dialogRef.afterClosed().subscribe(() => {
      this.modalVisible = false;
      this.dialogRef = null;
    });
  }

  closeModal(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
      this.modalVisible = false;
    }
  }

  isModalOpen(): boolean {
    return this.modalVisible;
  }
}
