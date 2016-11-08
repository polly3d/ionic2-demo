import { Component } from '@angular/core';
import {ViewController} from 'ionic-angular';

/*
  Generated class for the AddPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-page',
  templateUrl: 'add-page.html'
})
export class AddPage {

    constructor(public view: ViewController) {}

    dismiss(city: string) {
        this.view.dismiss(city);
    }

}
