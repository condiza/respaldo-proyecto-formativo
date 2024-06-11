import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-nostros',
  templateUrl: './text-nostros.component.html',
  styleUrl: './text-nostros.component.scss'
})
export class TextNostrosComponent {
@Input() text:string = '';
}
