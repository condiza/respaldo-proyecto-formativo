import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-icon',
  templateUrl: './social-icon.component.html',
  styleUrl: './social-icon.component.scss'
})
export class SocialIconComponent {
  @Input() link: string = '';
  @Input() icon: string = '';
  @Input() alt: string = '';
}
