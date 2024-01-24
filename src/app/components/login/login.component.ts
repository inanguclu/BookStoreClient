import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SetShoppingCartsModel } from 'src/app/models/set-shopping-carts.model';
import { AuthService } from 'src/app/services/auth.service';
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
    private auth:AuthService,
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

        if(this.shoppingCart.shoppingCarts.length>0){

          for(let s of this.shoppingCart.shoppingCarts){
            const cart=new SetShoppingCartsModel();
            cart.bookId=s.id;
            cart.userId=s.id;
            cart.price=s.price;
            cart.quantity=1;
            request.push(cart);
          }
          this.http.post("",request)
          .subscribe(res=>{
            localStorage.removeItem("shoppingCarts")
          });
        }

        
        localStorage.setItem("response",JSON.stringify(res));
        this.router.navigateByUrl("/");
        
      })
    }

  }
}
