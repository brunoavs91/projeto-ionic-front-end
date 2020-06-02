import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_CONFIG } from 'src/config/api.config';
import { CategoriaDTO } from 'src/models/categoria.dto';
import { Observable } from 'rxjs';

@Injectable()
export class CategoriaService{

    token :any;

    constructor(public http: HttpClient){
        this.token ='eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJicnVub2F2OTFAZ21haWwuY29tIiwiZXhwIjoxNTkwNDQ3Mjc4fQ.NYD7XhgeqcKpsa4Rc8Pb4cpwSWOuFaQi1Q2AEwelRj-kZ6_PVFyv1Cv0028_xe1AQ-kTfTYXkzNY1n1rTWFsgQ'
    }

    findAll() : Observable<CategoriaDTO[]> {

 
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`, {headers: new HttpHeaders({'Authorization': 'Bearer ' + this.token})});
        
    }   
}