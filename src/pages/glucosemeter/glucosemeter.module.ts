import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GlucosemeterPage } from './glucosemeter';

@NgModule({
  declarations: [
    GlucosemeterPage,
  ],
  imports: [
    IonicPageModule.forChild(GlucosemeterPage),
  ],
})
export class GlucosemeterPageModule {}
