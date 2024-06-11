import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img-nav-bar',
  templateUrl: './img-nav-bar.component.html',
  styleUrl: './img-nav-bar.component.scss'
})
export class ImgNavBarComponent {
@Input() src: string = '';
@Input() alt: string = '';
}
