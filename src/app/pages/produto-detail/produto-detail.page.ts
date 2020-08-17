import { Component, OnInit } from '@angular/core';
import { ProdutoDTO } from 'src/models/produto.dto';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-produto-detail',
  templateUrl: './produto-detail.page.html',
  styleUrls: ['./produto-detail.page.scss'],
})
export class ProdutoDetailPage implements OnInit {

  item : ProdutoDTO;
  constructor(public navCtrl: NavController) { }

  ngOnInit() {

    this.item = {
      id:"1",
      nome: "Mouse",
      valor: 80.59
    }
  }

}
