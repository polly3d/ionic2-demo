import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {IonicApp, IonicModule} from "ionic-angular";
import * as ActionSheets from "../pages/action-sheets/action-sheets";
import * as Alerts from "../pages/alerts/alerts";
import {BadgePage} from "../pages/badges/badges";
import * as Buttons from "../pages/buttons/buttons";
import {InAppBrowserComponent} from "../pages/in-app-browser/in-app-borwser-component";
import {HttpTestComponent} from "../pages/http-test-component/http-test-component";
/**
 * Created by sci-change on 2016/10/26.
 */

@NgModule({
    imports: [
        IonicModule.forRoot(AppComponent)
    ],
    bootstrap: [ IonicApp ],
    declarations: [
        AppComponent,
        ActionSheets.BasicPage,
        Alerts.BasicPage,
        Alerts.PromptAlert,
        Alerts.RadioAlert,
        Alerts.CheckBoxAlert,
        BadgePage,
        Buttons.BaseButton,
        Buttons.ButtonInComponent,
        InAppBrowserComponent,
        HttpTestComponent,
    ],
    entryComponents: [
        AppComponent,
        ActionSheets.BasicPage,
        Alerts.BasicPage,
        Alerts.PromptAlert,
        Alerts.RadioAlert,
        Alerts.CheckBoxAlert,
        BadgePage,
        Buttons.BaseButton,
        Buttons.ButtonInComponent,
        InAppBrowserComponent,
        HttpTestComponent,
    ]
})
export class AppModule {

}