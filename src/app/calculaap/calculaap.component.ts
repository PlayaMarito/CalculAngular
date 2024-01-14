import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculaap',
  templateUrl: './calculaap.component.html',
  styleUrls: ['./calculaap.component.css'],
  imports: [FormsModule, CommonModule]
})
export class CalculaapComponent {
  numero1: any = 0;
  numero2: any = 0;
  resultado: number = 0;

  sumar() {
    this.resultado = Number (this.numero1) + Number(this.numero2);
  }

  restar() {
    this.resultado = Number.parseInt(this.numero1) - Number.parseInt(this.numero2);
  }

  multiplicar() {
    this.resultado = Number.parseInt(this.numero1) * Number.parseInt(this.numero2);
  }

  dividir() {
    this.resultado = Number.parseInt(this.numero1) / Number.parseInt(this.numero2);
  }
}
