import {Component} from "@angular/core";
import {Platform} from 'ionic-angular';
import {TabsPage} from "../pages/tabs/tabs";
import {StatusBar,Splashscreen} from 'ionic-native';
/**
 * Created by sci-change on 2016/10/26.
 */

@Component({
    template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class AppComponent{
    rootPage = TabsPage;

    constructor(platform: Platform) {
        platform.ready().then(() => {
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }

}