import { Component, OnInit } from '@angular/core';
import { ProdutoDTO } from 'src/models/produto.dto';
import { NavController } from '@ionic/angular';
import { ProdutoService } from 'src/services/domain/produto.service';
import { Router } from '@angular/router';
import { UtilsService } from 'src/services/utils.service';
import { API_CONFIG } from 'src/config/api.config';


@Component({
  selector: 'app-produto-detail',
  templateUrl: './produto-detail.page.html',
  styleUrls: ['./produto-detail.page.scss'],
})
export class ProdutoDetailPage implements OnInit {

  item : ProdutoDTO;
  constructor(public navCtrl: NavController,
    public produtoService : ProdutoService,
    private router :Router,
    public utilsService : UtilsService) { }

  ngOnInit() {
 
    let resulParam = this.utilsService.getValorNavigation(this.router.getCurrentNavigation());
    this.produtoService.findbyId(resulParam)
    .subscribe(response =>{
      this.item = response;
    },
    erro =>{})
   
   
  }

  getImageUrlIfExists() {
    this.produtoService.getImageFromBucket(this.item.id)
    .subscribe(response =>{
      this.item.imageUrl = `${API_CONFIG.bucketBaseUrl}/prod${this.item.id}.jpg`;
    },
    erro =>{});
  }

  backProdutos(){
    this.navCtrl.navigateRoot("produtos");
  }

}
