import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {WeatherData} from "../../providers/weather-data";

/*
  Generated class for the ForecastPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-forecast-page',
  templateUrl: 'forecast-page.html'
})
export class ForecastPage {

  constructor(public navCtrl: NavController,private navParams: NavParams) {}

  ionViewDidLoad() {
      let weather: WeatherData = this.navParams.get('weather');
      console.log(weather);
  }

}
