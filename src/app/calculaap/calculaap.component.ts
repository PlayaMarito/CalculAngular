import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculaap',
  standalone: true,
  imports: [FormsModule, 
    CommonModule]
    @Component({
      selector: 'app-calculaap',
      templateUrl: './calculaap.component.html',
      styleUrls: ['./calculaap.component.css']
})
export class CalculaapComponent {
  numero1: any
  numero2: any 
  resultado: number = 0;