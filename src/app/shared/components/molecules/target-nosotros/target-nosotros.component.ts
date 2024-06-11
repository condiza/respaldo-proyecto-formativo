import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-target-nosotros',
  templateUrl: './target-nosotros.component.html',
  styleUrl: './target-nosotros.component.scss'
})
export class TargetNosotrosComponent {
@Input() src:string = '';
@Input() alt:string = '';
@Input() title:string = '';
@Input() txt:string = '';
}
