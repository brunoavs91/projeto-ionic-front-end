import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClienteDTO } from 'src/models/cliente.dto';
import { API_CONFIG } from 'src/config/api.config';
import { StorageService } from '../storage.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ClienteService {
    [x: string]: any;

    constructor(public http: HttpClient, public storage : StorageService){

    }
    setHttpHeader(token : string) {
      const headers = new HttpHeaders().set('Accept', 'application/json').set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' +  token);
      let options = { headers: headers,  'responseType': 'text'};
      return options;
    }

    findByEmail(email : string) : Observable<ClienteDTO>{
        let token = this.storage.getLocalUser().token;
        
     
        const httpOptions : Object = {
          headers: new HttpHeaders({
            'Authorization' : 'Bearer ' +  token,
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8'
          }),
          responseType: 'text'
        };
        
       
       return this.http.get<ClienteDTO>(
           `${API_CONFIG.baseUrl}/clientes/email?value=${email}`, httpOptions);
           
          
    }
}