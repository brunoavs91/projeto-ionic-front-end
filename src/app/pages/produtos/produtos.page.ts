import { Component, OnInit, Injector, Inject } from '@angular/core';
import { ProdutoDTO } from 'src/models/produto.dto';
import { NavController, NavParams } from '@ionic/angular';
import { ProdutoService } from 'src/services/domain/produto.service';
import { Router } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  items :ProdutoDTO [];
  constructor(public navCtrl : NavController,
    public produtoService : ProdutoService,
    private router :Router) { }

  ngOnInit() {
    let navegation = this.router.getCurrentNavigation();
    
    let categoria_id =JSON.stringify(navegation.extras.queryParams);
     let valoresNav: string[] = categoria_id.split(':');

    if(categoria_id != null){
      let id_categoria =valoresNav[1].substring(0,1);
      this.produtoService.findByCategoria(id_categoria)
      .subscribe(response => {
        this.items = response['content'];
      },
      erro =>{});
    }

/*     this.items =[{
      id : "1",
      nome : "Mouse",
      preco : 80.99
    },
  {
    id : "2",
    nome : "Teclado",
    preco : 100.00
  }];
  } */
  }


  backCategorias(){
    this.navCtrl.navigateRoot("categorias");
  }

}
