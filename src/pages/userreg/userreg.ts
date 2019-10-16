import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import{ HomePage } from '../home/home';
import {FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

/**
 * Generated class for the UserregPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "userregistration"
})
@Component({
  selector: 'page-userreg',
  templateUrl: 'userreg.html',
})
export class UserregPage {
  Name:any;
  Username:any;
  Password:any;
  Address:any;
  Contact:any;

  name:AbstractControl;
  user:AbstractControl;
  pass:AbstractControl;
  cont:AbstractControl;
  addr:AbstractControl;

  form:FormGroup;
 

  constructor(public navCtrl: NavController, public navParams: NavParams, private http:Http, public fb:FormBuilder) {
    this.form = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(3),Validators.pattern('[a-zA-Z]*') ]],
      user: ['',[Validators.required, Validators.minLength(3)]],
      pass: ['',[Validators.required, Validators.minLength(3)]],
      cont: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10) ]],
      addr: ['',[Validators.required, Validators.minLength(3) ]]

    });
    this.name = this.form.controls['name'];
    this.user = this.form.controls['user'];
    this.pass = this.form.controls['pass'];
    this.cont = this.form.controls['cont'];
    this.addr = this.form.controls['addr'];
  }

  
  add(){
    console.log(this.Name+this.Username+this.Password+this.Address+this.Contact);
    var body ={
      Name:this.Name,
      Username:this.Username,
      Password:this.Password,
      Address:this.Address,
      Contact:this.Contact,
      
    }
    this.http.post('http://localhost:8080/insert',body).subscribe(res=>{
      if(res.json().status==200)
      {
        this.navCtrl.push(HomePage);
        
      }
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserregPage');
  }

}
