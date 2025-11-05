import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CityService {
  private storageKey = 'savedCities';

  getCities(): string[] {
    const saved = localStorage.getItem(this.storageKey);
    return saved ? JSON.parse(saved) : [];
  }

  addCity(city: string) {
    const cities = this.getCities();
    if (!cities.includes(city)) {
      cities.push(city);
      localStorage.setItem(this.storageKey, JSON.stringify(cities));
    }
  }

  removeCity(city: string) {
    const cities = this.getCities().filter(c => c !== city);
    localStorage.setItem(this.storageKey, JSON.stringify(cities));
  }
}
