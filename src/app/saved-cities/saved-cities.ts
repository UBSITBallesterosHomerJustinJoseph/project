import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityService } from '../city';

@Component({
  selector: 'app-saved-cities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './saved-cities.html',
  styleUrls: ['./saved-cities.css']
})
export class SavedCitiesComponent {
  cities: string[] = [];

  constructor(private cityService: CityService) {}

  ngOnInit() {
    this.loadCities();
  }

  loadCities() {
    this.cities = this.cityService.getCities();
  }

  remove(city: string) {
    this.cityService.removeCity(city);
    this.loadCities();
  }
}
