import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {
  @Input() cards: {
    id?:string,
    title: string,
     subtitle: string,
     titlePrice:string,
     price: string, 
     imageSrc: string, 
     imageAlt: string }[] = [];

}
