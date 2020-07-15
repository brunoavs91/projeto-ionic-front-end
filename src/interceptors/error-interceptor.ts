import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core'
import { catchError, retry } from 'rxjs/operators';
import { StorageService } from 'src/services/storage.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(public storage : StorageService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => {
                    console.log("passou");
                    let errorMessage = '';
                    if (error.error instanceof ErrorEvent) {
                        // client-side error
                        errorMessage = `Error: ${error.error.message}`;
                    } else {
                        // server-side error
                        errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
                    }
                    console.log(errorMessage);

                    switch (error.status) {
                        case 403:
                            this.handle403();
                            break;

                    }
                    return throwError(errorMessage);
                })
            )
    }

    handle403() {
    this.storage.setLocalUser(null);
    }

}