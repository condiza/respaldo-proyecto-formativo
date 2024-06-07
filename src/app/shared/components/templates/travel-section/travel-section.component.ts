import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-travel-section',
  templateUrl: './travel-section.component.html',
  styleUrl: './travel-section.component.scss'
})
export class TravelSectionComponent {
  @Input() sectionTitle: string = ''; 
  cards = [
    { title: 'Bogota', subtitle: 'Salida desde Medellín', price: '$200.000', imageSrc: 'assets/images/bogota.png', imageAlt: 'Bogota' },
    { title: 'Bogota', subtitle: 'Salida desde Medellín', price: '$200.000', imageSrc: 'assets/images/bogota.png', imageAlt: 'Bogota' },
    { title: 'Bogota', subtitle: 'Salida desde Medellín', price: '$200.000', imageSrc: 'assets/images/bogota.png', imageAlt: 'Bogota' },
    { title: 'Bogota', subtitle: 'Salida desde Medellín', price: '$200.000', imageSrc: 'assets/images/bogota.png', imageAlt: 'Bogota' },
  ];
}
