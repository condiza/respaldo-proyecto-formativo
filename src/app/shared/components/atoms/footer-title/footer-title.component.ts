import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-title',
  templateUrl: './footer-title.component.html',
  styleUrl: './footer-title.component.scss'
})
export class FooterTitleComponent {
  @Input() title: string = '';
}
