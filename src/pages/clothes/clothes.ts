import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';

/**
 * Generated class for the ClothesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:"clothes"
})
@Component({
  selector: 'page-clothes',
  templateUrl: 'clothes.html',
})
export class ClothesPage {
  shirt:any;
  pant:any;
  tshirt:any;
  short:any;
  bedsheet:any;
  other:any;
  Id:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private http:Http) {
  }

  add(){
    console.log(this.Id+this.shirt+this.pant+this.tshirt+this.short+this.bedsheet+this.other);
    var body ={
      Id:this.Id,
      shirt:this.shirt,
      pant:this.pant,
      tshirt:this.tshirt,
      short:this.short,
      bedsheet:this.bedsheet,
      other:this.other,
    }
    this.http.post('http://localhost:8080/data',body).subscribe(data=>{
    console.log(data); 
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClothesPage');
  }

}
