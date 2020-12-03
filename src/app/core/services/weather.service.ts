import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { API_KEY, API_URL } from 'src/resources/constants';
import { WeatherResponse } from '../models/weather.model';


@Injectable({ providedIn: 'root'})
export class WeatherService {

    constructor(private http: HttpClient) {}

    getCurrentWeather(): Observable<WeatherResponse> {
        return this.http.get<WeatherResponse>(
            API_URL,
            {
                params: {
                    q: 'Kharkiv',
                    appid: API_KEY
                }
            }
        );
    }
}