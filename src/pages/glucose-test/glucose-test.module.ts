import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GlucoseTestPage } from './glucose-test';

@NgModule({
  declarations: [
    GlucoseTestPage,
  ],
  imports: [
    IonicPageModule.forChild(GlucoseTestPage),
  ],
})
export class GlucoseTestPageModule {}
