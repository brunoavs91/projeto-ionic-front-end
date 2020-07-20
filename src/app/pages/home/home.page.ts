import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { CredenciaisDTO } from 'src/models/credenciais.dto';
import { AuthService } from 'src/services/auth.service';
import { StorageService } from 'src/services/storage.service';


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
    public auth :AuthService ,
    public storage : StorageService) { 

  }

  ngOnInit() {

    if(this.storage.getLocalUser === undefined){

      this.auth.refreshToken()
      .subscribe(response =>{
        this.auth.successFullLogin(response.headers.get('Authorization'));
        this.navCtrl.navigateRoot('categorias');
  
      },
      erro =>{});
    }
    console.log("nenhum usuario logado");
  }

  ionViewWillEnter(){
    this.menu.swipeGesture(false);
  }
  ionViewDidLeave(){
    this.menu.swipeGesture(true);
  }

  ionViewDidiEnter(){

    
    //vai empilhar a pagina em cima da outra
    
  
  }


  login(){
    this.auth.authenticate(this.creds)
    .subscribe(response =>{
      this.auth.successFullLogin(response.headers.get('Authorization'));
      this.navCtrl.navigateRoot('categorias');

    },
    erro =>{});
    //vai empilhar a pagina em cima da outra
    
  }

  
}
