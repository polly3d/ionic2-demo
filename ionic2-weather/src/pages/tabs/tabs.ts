import {Component} from "@angular/core";
import {HomePage} from "../home/home";
import {AboutPage} from "../about/about";
/**
 * Created by Administrator on 2016/11/4.
 */

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    homePage: any = HomePage;
    aboutPage: any = AboutPage;
}