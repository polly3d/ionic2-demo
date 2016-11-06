import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {IonicApp, IonicModule} from "ionic-angular";
import {TabsPage} from "../pages/tabs/tabs";
import {HomePage} from "../pages/home/home";
import {AboutPage} from "../pages/about/about";
import {CityPage} from "../pages/city/city";
import {WeatherService} from "../providers/weather-service";
import {HttpModule} from "@angular/http";
import {CityDescriptionPage} from "../pages/city/city-description";

/**
 * Created by sci-change on 2016/10/26.
 */

@NgModule({
    imports: [
        IonicModule.forRoot(AppComponent),
        HttpModule,
    ],
    bootstrap: [ IonicApp ],
    declarations: [
        AppComponent,
        TabsPage,
        HomePage,
        AboutPage,
        CityPage,
        CityDescriptionPage,

    ],
    entryComponents: [
        AppComponent,
        TabsPage,
        HomePage,
        AboutPage,
        CityPage,
        CityDescriptionPage,
    ],
    providers: [
        WeatherService,
    ]
})
export class AppModule {

}