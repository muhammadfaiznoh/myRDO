import { ModalItemOptionPage } from './../pages/modal-item-option/modal-item-option';
import { ItemPage } from './../pages/item/item';
import { StorePage } from './../pages/store/store';
import { GlucoseTestPage } from './../pages/glucose-test/glucose-test';
import { GlucosemeterPage } from './../pages/glucosemeter/glucosemeter';
import { ProfilePage } from './../pages/profile/profile';
import { ComponentsModule } from './../components/components.module';
import { IfastingPage } from './../pages/ifasting/ifasting';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RecipesPage } from '../pages/recipes/recipes';
import { ExercisesPage } from '../pages/exercises/exercises';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import {ItemService} from '../../services/item-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RecipesPage,
    ExercisesPage,
    IfastingPage,
    ProfilePage,
    GlucosemeterPage,
    GlucoseTestPage,
    StorePage,
    ItemPage, ModalItemOptionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,HttpModule,
    HttpClientModule
  ],
  exports: [
    ComponentsModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RecipesPage,
    ExercisesPage,
    IfastingPage,
    ProfilePage,
    GlucosemeterPage,
    GlucoseTestPage,
    StorePage,
    ItemPage, ModalItemOptionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ItemService
  ]
})
export class AppModule {}
