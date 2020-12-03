import { Component, Input, OnInit } from '@angular/core';
import { WeatherResponse } from 'src/app/core/models/weather.model';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  @Input() weatherModel?: WeatherResponse;

  constructor() { }

  ngOnInit(): void {}

}
