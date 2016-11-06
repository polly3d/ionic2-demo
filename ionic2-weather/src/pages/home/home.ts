import {Component, OnInit, AfterViewInit} from "@angular/core";
import {NavController} from "ionic-angular";
import {CityPage} from "../city/city";
import {WeatherService} from "../../providers/weather-service";
import {CityDescriptionPage} from "../city/city-description";
/**
 * Created by Administrator on 2016/11/4.
 */

@Component({
    templateUrl: 'home.html',
})
export class HomePage{

    cityArr: Array<any>;

    constructor(
        private navCtrl: NavController,
        private service: WeatherService,
    ) {
    }

    ionViewDidEnter() {
        this.service.getCityArr()
            .then(data => {
                this.cityArr = data;
            });
    }

    openAddCityUI() {
        this.navCtrl.push(CityPage);
    }

    openCityWeatherUI(city: any) {

        this.navCtrl.push(CityDescriptionPage,{city:city});
    }

    deleteCity(city)
    {
        this.service.removeCity(city)
            .then(data => {
                this.cityArr = data;
            })
            .catch(error => {
                console.log('delete error');
            });
    }
}