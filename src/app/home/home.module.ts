import { Component, OnInit } from '@angular/core';
import { TemperatureService } from '../temperature.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  temperature: string;

  constructor(private tempService: TemperatureService) {}

  ngOnInit() {
    this.getTemperature();
  }

  getTemperature() {
    this.tempService.getTemperature().subscribe({
      next: (data) => {
        this.temperature = data.temperature;
      },
      error: (err) => {
        console.error('Error al obtener la temperatura', err);
        this.temperature = 'No disponible'; // Mensaje en caso de error
      }
    });
  }

  activateIrrigation() {
    // Lógica para activar el sistema de riego
    console.log('Riego activado');
  }
}
