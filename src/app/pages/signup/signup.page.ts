import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor( public navCtrl: NavController,
    public menu :MenuController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.menu.swipeGesture(false);
  }
  ionViewDidLeave(){
    this.menu.swipeGesture(true);
  }

  signupUser(){
    console.log("enviou o form");
  }

  backHome(){
    this.navCtrl.navigateRoot('home');
  }

}
