import { Injectable } from '@angular/core';
import { SwalService } from './swal.service';
import { HttpErrorResponse } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    private swal: SwalService,
    private translate: TranslateService
  ) { }


  errorHandler(err: HttpErrorResponse) {
    console.log(err);

    switch (err.status) {
      case 0:
        this.translate.get("apiNotAvailable").subscribe(res => {
          this.swal.callToast(res, "error")
        });
        break;
      case 404:
        this.translate.get("apiNotFound").subscribe(res => {
          this.swal.callToast(res, "error")
        });
        break;
      case 400:
        this.swal.callToast(err.error.message, "error");
        break;
      case 500:
        this.swal.callToast(err.error, "error")
        break;

    }

  }
}
