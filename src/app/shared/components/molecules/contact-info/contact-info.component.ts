import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss'
})
export class ContactInfoComponent {
  @Input() icon: string = '';
  @Input() alt: string = '';
  @Input() info: string = '';
}
