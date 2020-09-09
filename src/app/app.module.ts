import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoriaService } from 'src/services/domain/categoria.service';
import { ErrorInterceptor } from 'src/interceptors/error-interceptor';
import { AuthService } from 'src/services/auth.service';
import { StorageService } from 'src/services/storage.service';
import { ClienteService } from 'src/services/domain/cliente.service';
import { AuthInterceptorProvider } from 'src/interceptors/auth.interceptor';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { SignupPage } from './pages/signup/signup.page';
import { EstadoService } from 'src/services/domain/estado.service';
import { CidadeService } from 'src/services/domain/cidade.service';
import { ProdutoService } from 'src/services/domain/produto.service';
import { utils } from 'protractor';
import { UtilsService } from 'src/services/utils.service';
import { CartService } from 'src/services/domain/cart.service';

@NgModule({
  declarations: [AppComponent, SignupPage],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CategoriaService,
    AuthInterceptorProvider,
    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    AuthService,
    StorageService,
    ClienteService,
    EstadoService,
    CidadeService,
    ProdutoService,
    UtilsService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
