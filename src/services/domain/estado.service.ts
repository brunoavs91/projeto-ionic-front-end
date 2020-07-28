import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_CONFIG } from 'src/config/api.config';
import { Observable } from 'rxjs';
import { EstadoDTO } from 'src/models/estado.dto';

@Injectable()
export class EstadoService{

    token :any;

    constructor(public http: HttpClient){
       
    }

    findAll() : Observable<EstadoDTO[]> {

        return this.http.get<EstadoDTO[]>(`${API_CONFIG.baseUrl}/estados`);
        
    }   
}