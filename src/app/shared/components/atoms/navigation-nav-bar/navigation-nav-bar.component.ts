import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-nav-bar',
  templateUrl: './navigation-nav-bar.component.html',
  styleUrl: './navigation-nav-bar.component.scss'
})
export class NavigationNavBarComponent {
  @Input() href: string = '';
  @Input() text: string = '';
}
