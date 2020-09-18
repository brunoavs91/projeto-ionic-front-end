import { Component, OnInit } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from 'src/services/auth.service';
import { url } from 'inspector';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Profile',
      url: 'profile',
      icon: 'home'
    },
    {
      title: 'Categoria',
      url: 'categorias',
      icon: 'home'
    },
    {
      title: 'Carrinho',
      url: 'cart',
      icon: 'home'
    },

    {title: 'Logout',  url: '',  icon: '' }
  ];
  

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public authService : AuthService,
    public navCtrl: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
 /*   const path = window.location.pathname.split('home/')[1];
    if (path !== undefined) {
       this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    } */
    this.navCtrl.navigateRoot("home");
  }

  openPage(page : {title :string, url:string}){

    switch(page.title){
      case 'Logout' :
        console.log("Teste logout");
        this.authService.logout();
        this.navCtrl.navigateRoot("home");
        break;

        default :
        this.navCtrl.navigateRoot(page.url);
    }
  }
}
