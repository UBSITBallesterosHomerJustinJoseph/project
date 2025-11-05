import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../weather';
import { CityService } from '../city';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
})
export class HomeComponent {
  city = '';
  weatherData: any;
  error = '';

  constructor(private weatherService: WeatherService, private cityService: CityService) {}

  fetchWeather() {
    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.error = '';
      },
      error: () => {
        this.error = 'Could not fetch weather data.';
        this.weatherData = null;
      },
    });
  }

  saveCity() {
    this.cityService.addCity(this.city);
    alert(`${this.city} has been saved!`);
  }
}
