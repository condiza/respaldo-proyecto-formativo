import { Component } from '@angular/core';
import { ModalService } from '../../../../features/feature-a/services/modal.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor(public modalService: ModalService) { }

  openLoginModal(): void {
    this.modalService.openModal();
  }
}
