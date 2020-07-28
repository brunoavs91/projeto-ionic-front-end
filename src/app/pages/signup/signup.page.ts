import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { FormGroup, FormBuilder , Validators} from '@angular/forms';

import { EstadoDTO } from 'src/models/estado.dto';
import { CidadeDTO } from 'src/models/cidade.dto';
import { CidadeService } from 'src/services/domain/cidade.service';
import { EstadoService } from 'src/services/domain/estado.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  formGroup: FormGroup;
  estados: EstadoDTO[];
  cidades: CidadeDTO[];

  constructor( public navCtrl: NavController,
    public menu :MenuController,
    public formBuilder : FormBuilder,
    public cidadeService : CidadeService,
    public estadoService : EstadoService) {

    this.formGroup = this.formBuilder.group({
    nome :['', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
    email : ['', [Validators.required, Validators.email]],
    tipo : ['1', [Validators.required]],
    cpfOuCnpj : ['', [Validators.required, Validators.min(11), Validators.max(14)]],
    senha : ['123', [Validators.required]],
    logradouro : ['Rua Teste', [Validators.required]],
    numero : ['25', [Validators.required]],
    complemento : ['Apto 3', []],
    bairro : ['Copacabana', []],
    cep : ['31252652', [Validators.required]],
    telefone1 : ['998544559', [Validators.required]],
    telefone2 : ['', []],
    telefone3 : ['', []],
    estadoId : [null, [Validators.required]],
    cidadeId : [null, [Validators.required]]    
      });
     }

  ngOnInit() {
    console.log("teste");
    this.estadoService.findAll()
    .subscribe(response => {
      this.estados = response;
      this.formGroup.controls.estadoId.setValue(this.estados[0].id);
      this.updateCidades();
    },
    erro =>{})

  }
  updateCidades(){
    console.log("Buscando Cidades");
   let estado_id = this.formGroup.value.estadoId;
   this.cidadeService.findAll(estado_id)
   .subscribe(response =>{
     this.cidades = response;
     this.formGroup.controls.cidadeId.setValue(null);
   },
   erro =>{})
  }

  ionViewWillEnter(){
    this.menu.swipeGesture(false);
  }
  ionViewDidLeave(){
    this.menu.swipeGesture(true);
  }

  signupUser(){
    console.log("enviou o form");
  }

  backHome(){
    this.navCtrl.navigateRoot('home');
  }

}
