import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import {OptionPage} from '../option/option';
import {FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

/**
 * Generated class for the AdminlogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-adminlog',
  templateUrl: 'adminlog.html',
})
export class AdminlogPage {
  Username:any;
  Password:any;

  user:AbstractControl;
  pass:AbstractControl;
  form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private http:Http, public fb: FormBuilder) {
    this.form = fb.group({
      user: ['',[Validators.required, Validators.minLength(3) ]],
      pass: ['',[Validators.required, Validators.minLength(3)]]

    });
    
    this.user = this.form.controls['user'];
    this.pass = this.form.controls['pass'];
  }
   
  
  add(){
    console.log(this.Username+this.Password);
    let body ={
      
      Username:this.Username,
      Password:this.Password,
      
    
      
    }
    
    this.http.post('http://localhost:8080/login',body).subscribe(res=>{
    
    if(res.json().status==200)
    {
      this.navCtrl.push(OptionPage)
      
    }
    else(alert("Wrong details"))
   
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminlogPage');
  }
 

}
