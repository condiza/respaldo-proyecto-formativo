import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-space-empty',
  templateUrl: './space-empty.component.html',
  styleUrl: './space-empty.component.scss'
})
export class SpaceEmptyComponent {
  @Input() src: string = '';
  @Input() alt: string = '';
}
