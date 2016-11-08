/**
 * Created by Administrator on 2016/11/8.
 */

export class WeatherData {

    id: number;
    name: string;
    weather: Array<any>;
    main: {temp: number,temp_min: number, temp_max: number };
}