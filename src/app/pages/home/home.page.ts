import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { CredenciaisDTO } from 'src/models/credenciais.dto';
import { AuthService } from 'src/services/auth.service';


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

  constructor(
    public navCtrl: NavController,
    public menu :MenuController,
    public auth :AuthService ) { 

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
    this.auth.authenticate(this.creds)
    .subscribe(response =>{
      this.auth.successFullLogin(response.headers.get('Authorization'));
      this.navCtrl.navigateRoot('categorias');

    },
    erro =>{});
    //vai empilhar a pagina em cima da outra
    console.log(this.creds);
  }

  
}
