import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core'
import { catchError, retry } from 'rxjs/operators';
import { StorageService } from 'src/services/storage.service';
import { API_CONFIG } from 'src/config/api.config';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(public storage :StorageService){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let localUser = this.storage.getLocalUser();
        let N = API_CONFIG.baseUrl.length;
        let requestToApi = req.url.substring(0, N) == API_CONFIG.baseUrl;

        if(localUser && requestToApi){
           const authReq = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + localUser.token)});
           return next.handle(authReq);
        }else{

            return next.handle(req)
        }

      
            }    

    
}

export const AuthInterceptorProvider ={
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
    multi : true,
};
