import { Component, OnInit } from '@angular/core';
import { ClienteDTO } from 'src/models/cliente.dto';
import { StorageService } from 'src/services/storage.service';
import { ClienteService } from 'src/services/domain/cliente.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  cliente: ClienteDTO;
  

  constructor(public storage: StorageService,
    public clienteService : ClienteService) { 
      
    }

  ngOnInit() {
    let localUser = this.storage.getLocalUser();
    if(localUser && localUser.email){
      this.clienteService.findByEmail(localUser.email).subscribe(response =>{
        console.log(response);
        this.cliente = response;
        console.log(this.cliente);
        
                //buscar imagem do bucket
      },
      erro =>{})
    }
  }

  ionViewDidLoad() {
    console.log("primeiro");
  }

  testandoCliente(){
    console.log(this.cliente.nome.toUpperCase);
  }

}
