
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  following = false;
  user = {
    name: 'Paula Bolliger',
    profileImage: 'assets/imgs/avatar/girl-avatar.png',
    coverImage: 'assets/imgs/backgrounds/background-5.jpg',
    occupation: 'Designer',
    location: 'Seattle, WA',
    description: 'A wise man once said: The more you do something, the better you will become at it.',
    age: 40,
    bmi: 30,
    height: 163,
    weight: 65
  };

 

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('Hello ProfileFour Page');
  }


}
