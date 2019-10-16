import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminlogPage } from './adminlog';

@NgModule({
  declarations: [
    AdminlogPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminlogPage),
  ],
})
export class AdminlogPageModule {}
