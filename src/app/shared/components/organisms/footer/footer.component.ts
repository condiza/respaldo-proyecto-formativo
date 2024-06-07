import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  acercaLinks = [
    { text: 'Preguntas frecuentes', url: '#' },
    { text: 'Contactactenos', url: '#' }
  ];

  informacionLinks = [
    { text: 'Requisitos de viaje', url: '#' },
    { text: 'Equipo permitido', url: '#' }
  ];

  legalLinks = [
    { text: 'Aerocivil', url: '#' },
    { text: 'Términos y condiciones', url: '#' },
    { text: 'Políticas de privacidad', url: '#' },
    { text: 'Derecho de retracto', url: '#' },
    { text: 'SuperIntendencia (SIC)', url: '#' },
    { text: 'SuperIntendencia de Industria y Comercio (SIC)', url: '#' },
    { text: 'Contrato de transporte - Aerolíneas', url: '#' },
    { text: 'Deberes y derechos del viajero', url: '#' }
  ];

  constructor() { }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
