import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalItemOptionPage } from './modal-item-option';

@NgModule({
  declarations: [
    ModalItemOptionPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalItemOptionPage),
  ],
})
export class ModalItemOptionPageModule {}
