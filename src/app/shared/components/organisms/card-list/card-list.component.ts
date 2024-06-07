import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {
  @Input() cards: { title: string,
     subtitle: string, 
     price: string, 
     imageSrc: string, 
     imageAlt: string }[] = [];

}
