import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClothesPage } from './clothes';

@NgModule({
  declarations: [
    ClothesPage,
  ],
  imports: [
    IonicPageModule.forChild(ClothesPage),
  ],
})
export class ClothesPageModule {}
