import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WeatherService {

    cityArr:Array<any> = [];

    constructor(public http: Http) {

    }

    load(city: string) {
        let url = 'http://apis.baidu.com/heweather/weather/free?city=' + city;
        let key = '84f6725a95519ce2b95197f7f75a4df2';
        let headers: Headers = new Headers();
        headers.append('apikey',key);
        return new Promise((resolve,reject) => {
            this.http.get(url,{headers: headers})
                .map(res => res.json())
                .subscribe(data => {
                    let result = data['HeWeather data service 3.0'][0];
                    resolve(result);
                });
        });
    }

}
