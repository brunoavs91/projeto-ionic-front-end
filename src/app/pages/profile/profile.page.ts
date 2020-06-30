import { Component, OnInit } from '@angular/core';
import { ClienteDTO } from 'src/models/cliente.dto';
import { StorageService } from 'src/services/storage.service';
import { ClienteService } from 'src/services/domain/cliente.service';
import { defaultThrottleConfig } from 'rxjs/internal/operators/throttle';
import { API_CONFIG } from 'src/config/api.config';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  cliente = {} as ClienteDTO;
  

  constructor(public storage: StorageService,
    public clienteService : ClienteService) { 
      
    }

  ngOnInit() {
    let localUser = this.storage.getLocalUser();
    if(localUser && localUser.email){
      this.clienteService.findByEmail(localUser.email).subscribe(response =>{
       
        this.cliente =response;
        this.getImageIfExists();
           
                //buscar imagem do bucket
      },
      erro =>{})
    }
  }

  getImageIfExists(){
    this.clienteService.getImageFromBucket(this.cliente.id)
    .subscribe(response =>{
      console.log(response);
      this.cliente.imageUrl =`${API_CONFIG.bucketBaseUrl}/cp${this.cliente.id}.jpg`;
    },
     erro =>{})
  }

  ionViewDidLoad() {
    console.log("primeiro");
  }

  testandoCliente(){
    console.log(this.cliente.nome.toUpperCase);
  }

}
