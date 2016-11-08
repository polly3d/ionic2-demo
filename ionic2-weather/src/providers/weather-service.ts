import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {WeatherData} from "./weather-data";

/*
  Generated class for the WeatherService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WeatherService {

    private mockData: WeatherData;
    constructor(public http: Http) {
        this.mockData = new WeatherData();
        this.mockData.id = 1;
        this.mockData.name = '深圳';
        this.mockData.weather = [{icon: '123'}];
        this.mockData.main = {temp: 21,temp_min: 15,temp_max: 23};
    }

    /**
     * get city's weather
     * @param city
     * @param country
     */
    city(city: string , country: string = 'China'): Promise<any> {
        let mockData = new WeatherData();
        mockData.id = 1;
        mockData.name = '深圳';
        mockData.weather = [{icon: '123'}];
        mockData.main = {temp: 21,temp_min: 15,temp_max: 23};
        mockData.name = city;
        return new Promise((resolve,reject) => {
            resolve(mockData);
        }) ;
    }

    /**
     * get local weather with the longitude and latitude
     */
    local(): Promise<any> {
        return new Promise((resolve,reject) => {
            resolve(this.mockData);
        });
    }

    /**
     * get the forecast
     * @param cityId
     * @param numOfDays
     */
    forecast(cityId: string, numOfDays: number): Promise<any> {
        return new Promise((resolve,reject) => {
            resolve(this.mockData);
        });
    }

}
