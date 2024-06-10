import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() titlePrice: string = 'Desde' ;
  @Input() price: string = '';
  @Input() imageSrc: string = '';
  @Input() imageAlt: string = '';
}
