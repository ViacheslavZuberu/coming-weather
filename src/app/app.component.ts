import { Component, OnInit } from '@angular/core';
import { WeatherResponse } from './core/models/weather.model';
import { WeatherService } from './core/services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public isLoading: boolean = false;
  public currentWeather?: WeatherResponse;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.weatherService.getCurrentWeather().subscribe((response: WeatherResponse) => {
      this.isLoading = false;
      this.currentWeather = response;
    });
  }
}
