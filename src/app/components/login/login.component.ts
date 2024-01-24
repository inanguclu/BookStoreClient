import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SetShoppingCartsModel } from 'src/app/models/set-shopping-carts.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private http: HttpClient,
    private router:Router,
    private shoppingCart:ShoppingCartService

  ) {

  }



  signIn(form: NgForm) {
    if (form.valid) {
      this.http.post("https://localhost:7127/api/Auth/Login",
       { 
        usernameOrEmail: form.controls["usernameOrEmail"].value, 
        password: form.controls["password"].value 
      })
      .subscribe((res:any)=>{
        const request:SetShoppingCartsModel[]=[];

        for(let s of this.shoppingCart.shoppingCarts){
          request.push(new SetShoppingCartsModel(){
            bookId:s.id,
            userId :0,
            currency:s.price.currency,
            price:s.price.value,
            quantity:1
          })
        };


        this.http.post("",)
        localStorage.setItem("response",JSON.stringify(res));
        this.router.navigateByUrl("/");
        
      })
    }

  }
}
