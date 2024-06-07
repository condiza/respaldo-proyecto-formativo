import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-link',
  templateUrl: './footer-link.component.html',
  styleUrl: './footer-link.component.scss'
})
export class FooterLinkComponent {
  @Input() url: string = '';
}
