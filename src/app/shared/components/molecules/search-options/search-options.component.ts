import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-options',
  templateUrl: './search-options.component.html',
  styleUrl: './search-options.component.scss'
})
export class SearchOptionsComponent {
  selectedColor: string = 'initial';
  selectedButton: number | null = null;

  constructor(private router: Router) {}

  cambiarColor(buttonIndex: number) {
    this.selectedButton = this.selectedButton === buttonIndex ? null : buttonIndex;
    this.selectedColor = this.selectedButton === null ? 'initial' : 'red';
  }

  enlace(): void {
    this.router.navigate(['']);
  }
}
