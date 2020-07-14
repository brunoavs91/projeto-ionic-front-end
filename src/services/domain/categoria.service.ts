import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_CONFIG } from 'src/config/api.config';
import { CategoriaDTO } from 'src/models/categoria.dto';
import { Observable } from 'rxjs';

@Injectable()
export class CategoriaService{

    token :any;

    constructor(public http: HttpClient){
       
    }

    findAll() : Observable<CategoriaDTO[]> {

 
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    //, {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.token})}
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`);
        
    }   
}