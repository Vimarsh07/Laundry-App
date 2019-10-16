import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import {OptionPage} from '../option/option';

/**
 * Generated class for the DisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-display',
  templateUrl: 'display.html',
})
export class DisplayPage {
  
  Id:any;
  items=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,  private http:Http) {
    
    
  }

  sub(){
    console.log(this.Id);
    var body={
      Id:this.Id,

    }
   
     this.http.post('http://localhost:8080/read',body).subscribe(data=>{
        this.items=data.json();
        console.log(data.json());



        
    })
  }
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayPage');
  }

}
