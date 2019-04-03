import { ItemService } from './../../../services/item-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the ItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})
export class ItemPage {
  public item: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public itemService:ItemService, public modalCtrl: ModalController ) {
    this.item = itemService.getItem(1);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemPage');
  }
 // add or remove item on wish list
 toggleWishList(item) {
  item.on_wish_list = !item.on_wish_list;
}

// get item options group name
getOptionGroupsName(item) {
  let optionGroups = [];
  for (let i = 0; i < item.option_groups.length; i++) {
    optionGroups.push(item.option_groups[i].name);
  }

  return optionGroups.join(',');
}

// make array with range is n
range(n) {
  return new Array(n);
}

// open item option modal
showOptions(item) {
  // show modal
  let modal = this.modalCtrl.create(ModalItemOptionPage, {item: item});

  // listen for modal close
  modal.onDidDismiss(confirm => {
    if (confirm) {
      // apply filter here
    } else {
      // do nothing
    }
  });

  modal.present();
}
}
