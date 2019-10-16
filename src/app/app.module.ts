import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {OptionPage} from '../pages/option/option';
import{ClothesPage }from '../pages/clothes/clothes';
import {DeletePage} from '../pages/delete/delete';
import {DisplayPage} from '../pages/display/display';
import {UpdatePage} from '../pages/update/update';
import {AdminlogPage} from '../pages/adminlog/adminlog';
import {HttpModule} from '@angular/http';
import {AdminregPage} from '../pages/adminreg/adminreg';
import {DetailPage} from '../pages/detail/detail';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OptionPage,
    ClothesPage,
    DeletePage,
    DisplayPage,
    UpdatePage,
    AdminlogPage,
    AdminregPage,
    DetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OptionPage,
    ClothesPage,
    DeletePage,
    DisplayPage,
    UpdatePage,
    AdminlogPage, 
    AdminregPage,
    DetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // HttpModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
