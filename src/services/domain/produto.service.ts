import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from 'src/config/api.config';

@Injectable()
export class ProdutoService{

    token :any;

    constructor(public http: HttpClient){
       
    }

    findByCategoria(categoria_id : string) {

        return this.http.get(`${API_CONFIG.baseUrl}/produtos/?categorias=${categoria_id}`);
        
    }   
}