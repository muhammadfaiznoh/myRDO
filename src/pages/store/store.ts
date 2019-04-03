import { ItemService } from './../../../services/item-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the StorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-store',
  templateUrl: 'store.html',
})
export class StorePage {
  public slides = [
    {
      src: 'assets/img/slide_4.jpg'
    },
    {
      src: 'assets/img/slide_5.jpg'
    },
    // {
    //   src: 'assets/imgs/slide_3.jpg'
    // }
  ];

  // list categories
  public categories: any;

  // list of items
  public items: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public itemService: ItemService) {

    this.items = itemService.getAll();
  }
   // view a item
   viewItem(itemId) {
   // this.navCtrl.push(ItemPage, {id: itemId})
  }


}
