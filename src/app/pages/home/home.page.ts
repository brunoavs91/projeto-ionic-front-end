import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController) { 

  }

  ngOnInit() {
  }

  login(){
    //vai empilhar a pagina em cima da outra
    
    this.navCtrl.navigateRoot('categorias');
  }

  back(){

  }

}
