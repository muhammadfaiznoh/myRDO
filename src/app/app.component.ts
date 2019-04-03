import { StorePage } from './../pages/store/store';
import { components } from './../components/components.module';
import { GlucosemeterPage } from './../pages/glucosemeter/glucosemeter';
import { ProfilePage } from './../pages/profile/profile';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RecipesPage } from '../pages/recipes/recipes';
import { ExercisesPage } from '../pages/exercises/exercises';
import { IfastingPage } from '../pages/ifasting/ifasting';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ProfilePage;

  pages: Array<{title: string, component: any, icon: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Home', component: HomePage ,icon: 'home'},
      { title: 'Profile', component: ProfilePage, icon: 'person' },
      { title: 'IF Meter', component: IfastingPage, icon: 'speedometer' },
      { title: 'Glucose Meter', component: GlucosemeterPage, icon: 'cafe' },
      { title: 'Recipes', component: RecipesPage, icon: 'restaurant' },
      { title: 'Keto Store', component: StorePage, icon: 'basket' },
      { title: 'Exercise', component: ExercisesPage , icon: 'bicycle'},
      //{ title: 'Others', component: ListPage, icon: 'options' }
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.component==ProfilePage)
    {
      this.nav.root(page.component);
    }else{
      this.nav.push(page.component);
    }
    
  }
}
