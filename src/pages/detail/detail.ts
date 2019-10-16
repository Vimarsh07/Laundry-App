import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import{DisplayPage} from '../display/display';
/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:"detail"
})
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  Name:any;
  items=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http:Http) {
  }

  det(){
    console.log(this.Name);
    var body={
      Name:this.Name,

    }
   
     this.http.post('http://localhost:8080/uread',body).subscribe(data=>{
        this.items=data.json();
        console.log(data.json());
    })
  }

  dis(){
    this.navCtrl.push(DisplayPage);
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
