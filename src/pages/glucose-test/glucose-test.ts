import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers , RequestOptions} from "@angular/http";
/**
 * Generated class for the GlucoseTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-glucose-test',
  templateUrl: 'glucose-test.html',
})
export class GlucoseTestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GlucoseTestPage');
  }

}
