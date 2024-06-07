import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox-atom',
  templateUrl: './checkbox-atom.component.html',
  styleUrl: './checkbox-atom.component.scss'
})
export class CheckboxAtomComponent {
  @Input() id: string = '';
  @Input() label: string = '';
}
