import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DetailPage} from '../detail/detail';
import {Http} from '@angular/http';
import { AdminregPage } from '../adminreg/adminreg';
import { AdminlogPage } from '../adminlog/adminlog';
import {FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Username:any;
  Password:any;

  user:AbstractControl;
  pass:AbstractControl;
  

  
  form: FormGroup;
   

  constructor(public navCtrl: NavController,private http:Http, public fb: FormBuilder) {
    this.form = fb.group({
      user: ['',[Validators.required, Validators.minLength(3),Validators.pattern('[a-zA-Z]*') ]],
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
    this.http.post('http://localhost:8080/ulogin',body).subscribe(res=>{
    
    if(res.json().status==200)
    {
      this.navCtrl.push(DetailPage)
      
    }
    else(alert("Wrong details"))
    })
  }
  

  push(){
    this.navCtrl.push("register");
  }
  push1(){
    this.navCtrl.push(AdminlogPage);
  }
  push2(){
    this.navCtrl.push("userregistration")
  }
  push3(){
    this.navCtrl.push(AdminregPage);
  }

}
