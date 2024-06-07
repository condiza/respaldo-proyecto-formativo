import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-span',
  templateUrl: './text-span.component.html',
  styleUrl: './text-span.component.scss'
})
export class TextSpanComponent {
  @Input() text: string = '';
}
