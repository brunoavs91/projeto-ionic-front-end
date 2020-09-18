import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/models/carti-item';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/services/domain/produto.service';
import { API_CONFIG } from 'src/config/api.config';
import { CartService } from 'src/services/domain/cart.service';
import { ProdutoDTO } from 'src/models/produto.dto';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  items : CartItem[];

  constructor( public navCtrl : NavController, 
     private router :Router,
     public cartService :CartService,
     public produtoService :ProdutoService) { }

  ngOnInit() {

   let cart = this.cartService.getCart();
   this.items = cart.items;
   this.loadImageUrls();
  }

  loadImageUrls() {
    console.log(this.items);
    for(var i =0; i < this.items.length; i++) {
      let item = this.items[i];
      this.produtoService.getSmallImageFromBucket(item.produto.id)
      .subscribe(response =>{
        item.produto.imageUrl = `${API_CONFIG.bucketBaseUrl}/prod${item.produto.id}-small.jpg`;
      },
      erro =>{})
    }
  }

  removeItem(produto : ProdutoDTO) {
    this.items = this.cartService.removeProduto(produto).items;
  }

  increaseQuantity(produto : ProdutoDTO) {
    this.items = this.cartService.increaseQuantity(produto).items;
  }

  decreaseQuantity(produto : ProdutoDTO) {
    this.items = this.cartService.decreaseQuantity(produto).items;
  }

  total() : number{
    return this.cartService.total();
  }

}
