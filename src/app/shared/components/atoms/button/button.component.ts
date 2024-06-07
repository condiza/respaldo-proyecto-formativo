import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() buttonClass: string = '';
  @Input() disabled?: boolean;

  @Output() click = new EventEmitter<void>();

  onClick(): void {
    if (!this.disabled) {
      this.emitClick();
    }
  }

  emitClick(): void {
    this.click.emit();
  }
}
