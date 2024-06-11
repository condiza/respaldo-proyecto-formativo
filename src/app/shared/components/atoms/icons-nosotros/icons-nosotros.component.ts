import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icons-nosotros',
  templateUrl: './icons-nosotros.component.html',
  styleUrl: './icons-nosotros.component.scss'
})
export class IconsNosotrosComponent {
@Input() src:string = '';
@Input() alt:string = '';
}
