import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-espace-empty',
  templateUrl: './text-espace-empty.component.html',
  styleUrl: './text-espace-empty.component.scss'
})
export class TextEspaceEmptyComponent {
@Input() txt: string = '';
}
