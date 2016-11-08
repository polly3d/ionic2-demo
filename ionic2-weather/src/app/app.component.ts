import {Component} from "@angular/core";
import {Platform} from 'ionic-angular';
import {StatusBar,Splashscreen} from 'ionic-native';
import {HomePage} from "../pages/home-page/home-page";
/**
 * Created by sci-change on 2016/10/26.
 */

@Component({
    template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class AppComponent{
    rootPage = HomePage;

    constructor(platform: Platform) {
        platform.ready().then(() => {
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }

}