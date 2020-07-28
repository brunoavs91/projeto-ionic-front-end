import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_CONFIG } from 'src/config/api.config';
import { CategoriaDTO } from 'src/models/categoria.dto';
import { Observable } from 'rxjs';
import { CidadeDTO } from 'src/models/cidade.dto';

@Injectable()
export class CidadeService{

    token :any;

    constructor(public http: HttpClient){
       
    }

    findAll(estado_id : string) : Observable<CidadeDTO[]> {

        return this.http.get<CidadeDTO[]>(`${API_CONFIG.baseUrl}/estados/${estado_id}/cidades`);
        
    }   
}