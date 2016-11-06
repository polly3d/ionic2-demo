import {Component} from "@angular/core";
import {NavParams} from "ionic-angular";
/**
 * Created by Administrator on 2016/11/6.
 */

@Component({
    templateUrl: 'city-description.html',
})
export class CityDescriptionPage {
    city: any;

    constructor(private params: NavParams) {
        this.city = params.data.city;
    }
}