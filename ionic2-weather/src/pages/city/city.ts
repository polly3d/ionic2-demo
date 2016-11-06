import {Component} from "@angular/core";
import {NavController, AlertController} from "ionic-angular";
import {WeatherService} from "../../providers/weather-service";
/**
 * Created by Administrator on 2016/11/5.
 */


@Component({
    templateUrl: 'city.html',
})
export class CityPage {

    constructor(
        private navCtrl: NavController,
        private alertCtrl: AlertController,
        private service: WeatherService
    ) {

    }

    addCity(input: any) {
        this.service.load(input.value)
            .then((data:any) => {
                if(data.status == 'ok')
                {
                    console.log(data);
                    this.service.cityArr.push(data);
                    this.navCtrl.pop();
                }
                else
                    throw new Error(`未打开 ${input.value} 的天气`);
            })
            .catch(error => {
                console.log('load data is error');
                console.log(error);

                let alertCtrl = this.alertCtrl.create({
                    'title': '提示',
                    'message': error.message,
                    'buttons': ['确定']
                });
                alertCtrl.present();
            });
    }
}