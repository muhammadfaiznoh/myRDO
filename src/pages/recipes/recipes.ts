import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RecipesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {
  items = [
    {
      name: 'Bulletproof Coffee',
      ingredient: '1 tbsp coffee \r\n1 cup hot water \r\n1 tbsp butter \r\n2 tbsp extra virgin coconut oil \r\n1 drop stevia',
      direction:'1. Put everything in the blender',
      imageUrl: 'assets/imgs/background/bulletproof_coffee.jpg',
    },
    {
      name: 'Keto Almonds Bun',
      ingredient: '11/4 cawan almond flour \r\n5 stb psyllium husks \r\n2 st baking powder \r\n½ st Himalaya salt \r\n3 biji putih telur \r\n1 stb Apple Cider Vinegar (ACV) \r\n1 cawan air mendidih',
      direction:'1. Panaskan oven ke suhu 180c. \r\n2. Campurkan bahan kering (almond flour, psyllium husks, baking powder dan garam). \r\n3. Masukkan ACV ke dalam telur putih dan pukul sehingga sebati. \r\n4. Masukkan bahan kering. Gaulkan. \r\n5. Curahkan 1 cawan air baru mendidih dan gaul rata. \r\n6. Basahkan tangan dan bentuk bulat kecik aduan lebih kurang 20 bahagian. \r\n7. Sapu telur kuning di atas roti dan tabur bijan. \r\n8. Bakar selamat 45minit.',
      imageUrl: 'assets/imgs/background/keto-rolls.jpg',
    },
    {
      name: 'Rendang Ayam Keto',
      ingredient: '(Blend semua bahan) 20 cili api 1 inci lengkuas \r\n1 inci halia \r\n3 btg serai \r\n2 sdt kunyit \r\n1 sudu ketumbar Daun kunyit (racik halus) \r\n3 helai daun limau purut \r\n2 asam keping \r\n1 ekor ayam \r\n2 kotak santan \r\nGaram Himalaya \r\nSedikit Lakanto \r\n3 sudu kerisik',
      direction:'1. Panaskan kuali dan masukkan ayam. \r\n2. Setelah kering sedikit masukkan bahan yang telah dikisar. Setelag mendidih masukkan santan. \r\n3. Apabila hampir kering masukkan asam keping, daun kunyit, daun limau purut dan lakanto. \r\n4. Masukkan kerisik. Apabila telah kering angkat dan hidang.',
      imageUrl: 'assets/imgs/background/rendangayam.jpg',
    },
    {
      name: 'Nasi Ulam Keto',
      ingredient: '1/2 helai daun kunyit \r\n1 helai daun limau purut \r\n1 batang serai \r\n2 cili padi \r\n4 kacang botol \r\n1 kacang panjang \r\n1 bunga kantan (atau daun kesum) \r\n1 bawang merah kecil \r\n1/2 sudu teh garam Himalaya \r\n3 cawan bunga kobis cincang seperti nasi \r\n2 sudu kerisik atau kelapa parut disangai dan blend sebentar.',
      direction:'1. Cincang kobis bunga halus jadi macam nasi. \r\n2. Hiris halus semua bahan. \r\n3.Panaskan kuali dan masukkan bunga kobis. Kacau sebentar. \r\n4. Masukkan semua bahan lain dan kacau.. \r\n5. Bila kering, hidang dan makan!',
      imageUrl: 'assets/imgs/background/nasiulam.jpg',
    }
    ,
    {
      name: 'Keto Hot Chocolate',
      ingredient: '1 cup hot water \r\n 2 tbsp unsweetened cocoa \r\n 1 tbsp whipping cream \r\n 2 tbsp coconut oil ',
      direction:'1. Blend in a blender.',
      imageUrl: 'assets/imgs/background/mexican-hot-chocolate.jpg',
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipesPage');
  }

}
