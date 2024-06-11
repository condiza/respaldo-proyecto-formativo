import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-carts',
  templateUrl: './title-carts.component.html',
  styleUrl: './title-carts.component.scss'
})
export class TitleCartsComponent {
@Input() text: string = '';
}
