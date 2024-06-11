import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-nosotros',
  templateUrl: './cart-nosotros.component.html',
  styleUrl: './cart-nosotros.component.scss'
})
export class CartNosotrosComponent {
@Input() carts: {
  src:string,
  alt:string,
  title:string,
  txt:string}[]=[]
}
