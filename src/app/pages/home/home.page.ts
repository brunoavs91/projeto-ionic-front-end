import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { CredenciaisDTO } from 'src/models/credenciais.dto';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  creds : CredenciaisDTO = {
    email: "",
    senha: ""
  };

  constructor(public navCtrl: NavController, public menu :MenuController) { 

  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.menu.swipeGesture(false);
  }
  ionViewDidLeave(){
    this.menu.swipeGesture(true);
  }


  login(){
    //vai empilhar a pagina em cima da outra
    console.log(this.creds);
    this.navCtrl.navigateRoot('categorias');
  }

  
}
