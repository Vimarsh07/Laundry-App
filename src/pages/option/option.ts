import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ClothesPage} from '../clothes/clothes';
import { DisplayPage } from '../display/display';
import { DeletePage } from '../delete/delete';

import { UpdatePage } from '../update/update';

/**
 * Generated class for the OptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-option',
  templateUrl: 'option.html',
  entryComponents:[ClothesPage]
})
export class OptionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  dis(){
    this.navCtrl.push(DisplayPage)
    
  }

  add(){
    this.navCtrl.push(ClothesPage)
  }

  

  update(){
    this.navCtrl.push(UpdatePage)
  }

  delete(){
    this.navCtrl.push(DeletePage)
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad OptionPage');
  }

}
