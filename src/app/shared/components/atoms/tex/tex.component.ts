import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tex',
  templateUrl: './tex.component.html',
  styleUrl: './tex.component.scss'
})
export class TexComponent {
@Input() txt:string = '';
}
