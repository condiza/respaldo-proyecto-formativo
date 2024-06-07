  import { Component, Input } from '@angular/core';

  @Component({
    selector: 'app-input-date',
    templateUrl: './input-date.component.html',
    styleUrls: ['./input-date.component.scss'] // Asegúrate de que sea 'styleUrls' y no 'styleUrl'
  })
  export class InputDateComponent {
    @Input() src: string = '';
    @Input() alt: string = '';
    @Input() txt: string = '';

    openCalendar(calendarInput: HTMLInputElement) {
      calendarInput.focus();
    }

    updateText(event: any) {
      const value = event.target.value;
      // Actualiza el texto con la fecha seleccionada
      this.txt = value ?? '';
    }
    getCurrentDate(): string {
      const today = new Date();
      const year = today.getFullYear();
      const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Agrega 0 al principio si es necesario
      const day = today.getDate().toString().padStart(2, '0'); // Agrega 0 al principio si es necesario
      return `${year}-${month}-${day}`;
    }
    
  }
