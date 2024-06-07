import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrl: './link-list.component.scss'
})
export class LinkComponent {
  @Input() title: string = '';
  @Input() links: { url: string, text: string }[] = [];
}
