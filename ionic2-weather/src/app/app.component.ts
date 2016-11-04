import {Component, OnInit, ViewChild} from "@angular/core";
import {NavItem} from "../core/nav-item";
import * as helper from "../directives/helper";
import {Nav, MenuController} from "ionic-angular";
/**
 * Created by sci-change on 2016/10/26.
 */

@Component({
    templateUrl: 'app.html'
})
export class AppComponent implements OnInit{
    rootPage: any;
    navItems: NavItem[];

    @ViewChild(Nav) nav: Nav;

    constructor(private menuCtrl: MenuController) {}

    ngOnInit(): void {
        this.navItems = helper.getAllNavItems();
        this.rootPage = this.navItems[this.navItems.length - 1].component;
    }

    openMenu(item: NavItem): void {
        if(item.component)
            this.nav.setRoot(item.component);
        this.menuCtrl.close();
    }
}