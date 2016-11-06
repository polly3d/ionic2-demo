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
export class HomePage implements OnInit,AfterViewInit{

    cityArr: Array<any>;

    constructor(
        private navCtrl: NavController,
        private service: WeatherService,
    ) {
    }

    ngOnInit() {
        this.cityArr = this.service.cityArr;
    }

    ngAfterViewInit() {
    }

    openAddCityUI() {
        this.navCtrl.push(CityPage);
    }

    openCityWeatherUI(city: any) {

        this.navCtrl.push(CityDescriptionPage,{city:city});
    }
}