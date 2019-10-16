import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';

/**
 * Generated class for the DeletePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-delete',
  templateUrl: 'delete.html',
})
export class DeletePage {
  Id:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http:Http) {
  }

  delete(){
    console.log(this.Id);
    var body={
      Id:this.Id,

    }
    this.http.post('http://localhost:8080/delete',body).subscribe(data=>{
      alert(data);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeletePage');
  }

}
