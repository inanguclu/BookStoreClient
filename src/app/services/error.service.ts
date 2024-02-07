import { Injectable } from '@angular/core';
import { SwalService } from './swal.service';
import { HttpErrorResponse } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    private swal:SwalService,
    private translate:TranslateService
    ) { }


  errorHandler(err:HttpErrorResponse){
    if(err.status==400){
      this.swal.callToast(err.error.message,"error");
    }else if(err.status==0){
      let errorMessage= "";
      this.translate.get("apiNotAvailable").subscribe(res=>{
        errorMessage=res;

      });
      this.swal.callToast(errorMessage,"error")
    }
  }
}
