import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/services/domain/categoria.service';
import { CategoriaDTO } from 'src/models/categoria.dto';
import { API_CONFIG } from 'src/config/api.config';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  bucketUrl : string = API_CONFIG.bucketBaseUrl;
  items : CategoriaDTO[];
  
  constructor(public categoriaService : CategoriaService,
    public navCtrl : NavController) { }



  ngOnInit() {
    this.categoriaService.findAll().subscribe(response =>{

      this.items = response;
      
    },
    error =>{});
  }

  showProdutos(categoria_id : string){
    this.navCtrl.navigateRoot("produtos", {queryParams : {categoria_id}});
    //this.navCtrl.navigateBack("categorias");
  }
 

  ionViewDidLoad() {
  
  }

}
