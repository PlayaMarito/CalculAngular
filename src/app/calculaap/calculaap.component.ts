import { Component } from '@angular/core';

@Component({
  selector: 'app-calculaap',
  templateUrl: './calculaap.component.html',
  styleUrls: ['./calculaap.component.css'],
})
export class CalculaapComponent {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  sumar() {
    this.resultado = this.numero1 + this.numero2;
  }

  restar() {
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicar() {
    this.resultado = this.numero1 * this.numero2;
  }

  dividir() {
    if (this.numero2 !== 0) {
      this.resultado = this.numero1 / this.numero2;
    } else {
      // Manejar la división por cero, podrías mostrar un mensaje de error o tomar otra acción.
      console.error('Error: División por cero');
    }
  }
}
