import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string = "";

  constructor() { }

  isAuthentication(){
    const tokenString = localStorage.getItem("token");
    if(tokenString){
      const tokenJson= JSON.parse(tokenString)
      this.token= tokenJson;
      return true;
    }

    return false;
  }


}
