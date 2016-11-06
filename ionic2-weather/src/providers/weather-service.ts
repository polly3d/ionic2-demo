import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage} from "@ionic/storage";

/*
  Generated class for the WeatherService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WeatherService {

    KEY: string = 'weather';

    constructor(
        public http: Http,
        private storage: Storage
    ) {

    }



    getCityArr(): Promise<any>{
        return this.storage.get(this.KEY)
            .then(result => {
                return JSON.parse(result);
            });
    }

    addCity(city: any): void {
        this.getCityArr()
            .then(result => {
                let arr:Array<any> = result;
                arr.push(city);
                this.updateStorage(arr);
            });
    }

    removeCity(city: any): Promise<any> {
        return new Promise((resolve,reject) => {
            this.getCityArr()
                .then(result => {
                    let arr: Array<any> = result;
                    let index = -1;
                    for(let i = 0; i < arr.length; i++)
                    {
                        let temp: any = arr[i];
                        if(temp.basic.city == city.basic.city)
                        {
                            index = i;
                            console.log(index);
                            break;
                        }
                    }
                    if(index != -1)
                    {
                        arr.splice(index,1);
                        this.updateStorage(arr);
                        resolve(arr);
                    }
                });
        });

    }

    private updateStorage(cityArr: Array<any>) {
        this.storage.set(this.KEY,JSON.stringify(cityArr));
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
