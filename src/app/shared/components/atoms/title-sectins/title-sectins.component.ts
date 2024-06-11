import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-sectins',
  templateUrl: './title-sectins.component.html',
  styleUrl: './title-sectins.component.scss'
})
export class TitleSectinsComponent {
@Input() txt: string = '';
}
