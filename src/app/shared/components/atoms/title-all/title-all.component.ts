import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-all',
  templateUrl: './title-all.component.html',
  styleUrl: './title-all.component.scss'
})
export class TitleAllComponent {
@Input() txt: string = '';
}
