import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nosotros-templates',
  templateUrl: './nosotros-templates.component.html',
  styleUrl: './nosotros-templates.component.scss'
})
export class NosotrosTemplatesComponent {
  cart = [
    {
      src: 'assets/icons/people.png',
      alt: 'Description 1',
      title: '+1000 Clientes',
      txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
      src: 'assets/icons/mapa.png',
      alt: 'Description 2',
      title: '+300 Locaciones',
      txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
      src: 'assets/icons/target.png',
      alt: 'Description 2',
      title: '+300 Locaciones',
      txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
      src: 'assets/icons/audifon.png',
      alt: 'Description 2',
      title: '+300 Locaciones',
      txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
      src: 'assets/icons/message.png',
      alt: 'Description 2',
      title: '+300 Locaciones',
      txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
  ];
}
