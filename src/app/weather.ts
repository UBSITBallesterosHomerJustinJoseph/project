import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private apiKey = 'f952ca2cb623c526297f5df6490af349';
  private apiUrl = 'https://api.weatherstack.com/current';

  constructor(private http: HttpClient) {}
getWeather(city: string): Observable<any> {
  const url = `https://api.allorigins.win/get?url=${encodeURIComponent(
    'http://api.weatherstack.com/current?access_key=f952ca2cb623c526297f5df6490af349&query=' + city
  )}`;
  return this.http.get(url);
}

 
}
