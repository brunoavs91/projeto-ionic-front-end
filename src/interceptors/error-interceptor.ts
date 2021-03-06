import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core'
import { catchError, retry } from 'rxjs/operators';
import { StorageService } from 'src/services/storage.service';
import { AlertController } from '@ionic/angular';
import { FieldMessage } from 'src/models/fieldMessage';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(public storage: StorageService, public alertCtrl: AlertController) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => {

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
                        case 401:
                            this.handle401();
                            break;

                        case 403:
                            this.handle401();
                            break;

                        case 422:
                           this.handle422(error);
                           break; 
                               
                        default:
                            this.handleDefault(error);

                    }
                    return throwError(errorMessage);
                })
            )
    }
    handle422(errorObj) {
      let alert = this.alertCtrl.create({
          header: 'Error 422 : Validação' ,
          message : this.listError(errorObj.erros),
          backdropDismiss: false,
          buttons: [
              {
                  text: 'Ok'
              }
          ]
      });
      alert.then(alert => alert.present());
     
    }

    handleDefault(error) {
        let alert = this.alertCtrl.create({
            header: 'Error' + error.status + ' : ' + error,
            message: error.message,
            backdropDismiss: false,
            buttons: [
                {
                    text: 'Ok'
                }
            ]
        });
        alert.then(alert => alert.present());
    }

    

    handle403() {
        this.storage.setLocalUser(null);
    }

    handle401() {
        let alert = this.alertCtrl.create({
            header: 'Error',
            message: 'Email ou senha incorretos',
            backdropDismiss: false,
            buttons: [
                {
                    text: 'Ok'
                }
            ]
        });
        alert.then(alert => alert.present());
    }

    listError(messages : FieldMessage[]) : string{

        let s : string ='';
        for(var i =0; i < messages.length; i++){
            s = s + '<p><strong>' + messages[i].fieldName + "</strong> " + messages[i].message + '</p>';
        }
        return s;
    }

}