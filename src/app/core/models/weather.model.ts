import { Clouds, Coord, Weather, Wind } from './generic-data.model';
import { Main } from "./main.model";
import { Sys } from './sys.model';

export interface WeatherResponse {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    id: number;
    name: string;
    cod: number;
}

