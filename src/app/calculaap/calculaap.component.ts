import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculaap',
  templateUrl: './calculaap.component.html',
  styleUrls: ['./calculaap.component.css'],
  standalone: true, // Esta propiedad no es necesaria
  imports: [FormsModule, CommonModule]
})
export class CalculaapComponent {
  numero1: any;
  numero2: any;
  resultado: number = 0;

  sumar() {
    this.resultado = Number(this.numero1) + Number(this.numero2);
  }
}