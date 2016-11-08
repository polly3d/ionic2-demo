import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {IonicApp, IonicModule} from "ionic-angular";
import {HomePage} from "../pages/home-page/home-page";
import {AddPage} from "../pages/add-page/add-page";
import {ForecastPage} from "../pages/forecast-page/forecast-page";
import {WeatherService} from "../providers/weather-service";
import {WeatherComponent} from "../component/weather-component";

/**
 * Created by sci-change on 2016/10/26.
 */

@NgModule({
    imports: [
        IonicModule.forRoot(AppComponent),
    ],
    bootstrap: [ IonicApp ],
    declarations: [
        AppComponent,
        HomePage,
        AddPage,
        ForecastPage,
        WeatherComponent,
    ],
    entryComponents: [
        AppComponent,
        HomePage,
        AddPage,
        ForecastPage,
    ],
    providers: [
        WeatherService,
    ]
})
export class AppModule {

}