import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  constructor() {

  }

  callToast(title: string, icon: SweetAlertIcon = "success") {
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false
    });
    Toast.fire(title, '', icon);
  }

  callSwall(callBack:()=>void){
    Swal.fire({
      title: "silmek istiyor musunuz?",
      icon:"question",
      showCancelButton:true,
      cancelButtonText:"vazgeç",
      showConfirmButton:true,
      confirmButtonText:'sil'
    }).then(res=> {
      if(res.isConfirmed){
        callBack();
      }
    })
  }
}

type SweetAlertIcon = 'success' | 'error' | 'warning' | 'info' | 'question'
