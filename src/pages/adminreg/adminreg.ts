import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import {AdminlogPage} from '../adminlog/adminlog';
import {FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';


/**
 * Generated class for the AdminregPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "adminregistration"
})
@Component({
  selector: 'page-adminreg',
  templateUrl: 'adminreg.html',
  entryComponents:[AdminlogPage]
 
})
export class AdminregPage {
  Name:any;
  Username:any;
  Password:any;
  Contact:any;

  name:AbstractControl;
  user:AbstractControl;
  pass:AbstractControl;
  cont:AbstractControl;

  form:FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private http:Http, public fb: FormBuilder) {
    this.form = fb.group({
      name: ['',[Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]*') ]],
      user: ['',[Validators.required, Validators.minLength(3) ]],
      pass: ['',[Validators.required, Validators.minLength(3)]],
      cont: ['',[Validators.required ,  Validators.minLength(10), Validators.maxLength(10)]]

    });
    this.name = this.form.controls['name'];
    this.user = this.form.controls['user'];
    this.pass = this.form.controls['pass'];
    this.cont = this.form.controls['cont'];
  

  }
  add(){
    console.log(this.Name+this.Username+this.Password+this.Contact);
    var body ={
      Name:this.Name,
      Username:this.Username,
      Password:this.Password,
      Contact:this.Contact,
      
    }
    this.http.post('http://localhost:8080/ainsert',body).subscribe(res=>{
      
      
      if(res.json().status==200)
      {
        this.navCtrl.push(AdminlogPage);
        
      }
      })
   
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminregPage');
  }
 
}
