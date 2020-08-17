import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class UtilsService{

constructor(private router :Router){

}
  
getValorNavigation(navigation :any) : string{
   // let navegation = this.router.getCurrentNavigation();
    
    let queryParams =JSON.stringify(navigation.extras.queryParams);
     let valores_param: string[] = queryParams.split(':');

    if(valores_param != null){
      return valores_param[1].substring(0,1);

}
return null;
}

}