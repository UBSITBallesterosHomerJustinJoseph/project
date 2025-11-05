import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private apiKey = 'f952ca2cb623c526297f5df6490af349'; // replace with your actual key
  private apiUrl = 'http://api.weatherstack.com/current';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?access_key=${this.apiKey}&query=${city}`);
  }
}
