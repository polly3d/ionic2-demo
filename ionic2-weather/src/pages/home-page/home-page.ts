import { Component } from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {WeatherData} from "../../providers/weather-data";
import {WeatherService} from "../../providers/weather-service";
import {AddPage} from "../add-page/add-page";
import {ForecastPage} from "../forecast-page/forecast-page";

/*
  Generated class for the HomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-home-page',
    templateUrl: 'home-page.html'
})
export class HomePage {

    weatherList: Array<WeatherData>;

    constructor(
        public navCtrl: NavController,
        private modalCtrl: ModalController,
        private weatherService: WeatherService
    ) {
        this.weatherList = [];
    }

    ionViewDidLoad() {
        this.weatherService.city('New York')
            .then((data: WeatherData) => {
                this.weatherList.push(data);
            })
            .catch(error => console.log(error));
    }

    clickAddCity() {
        let modal = this.modalCtrl.create(AddPage);
        modal.onDidDismiss((data: string) => {
            this.addCityWeather(data);
        });
        modal.present();
    }

    addCityWeather(city: string) {
        this.weatherService.city(city)
            .then((data: WeatherData) => {
                this.weatherList.push(data);
            })
            .catch(error => console.log(error));
    }

    clickWeather(weather: WeatherData): void {
        this.navCtrl.push(ForecastPage, {weather: weather});
    }

}
