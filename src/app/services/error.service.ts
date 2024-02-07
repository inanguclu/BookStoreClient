import { Injectable } from '@angular/core';
import { SwalService } from './swal.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private swal:SwalService) { }


  errorHandler(err:HttpErrorResponse){
    if(err.status==400){
      this.swal.callToast(err.error.message,"error");
    }
  }
}
