import {Component, Input, Output, EventEmitter} from "@angular/core";
import {WeatherData} from "../providers/weather-data";
/**
 * Created by Administrator on 2016/11/8.
 */

@Component({
    selector: 'weather',
    templateUrl: 'weather-component.html',
})
export class WeatherComponent {
    @Input() weather: WeatherData;
    @Output() viewMore: EventEmitter<WeatherData> = new EventEmitter();

    clickWeather(weather: WeatherData) {
        this.viewMore.next(weather);
    }
}