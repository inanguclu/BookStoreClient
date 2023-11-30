import { Component } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { TranslateService } from '@ngx-translate/core';
import { PaymentModel } from 'src/app/models/payment.model';
import { Cities, Countries } from 'src/app/constants/address';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {


  language: string = "en";
  selectedTab: number = 1;
  request:PaymentModel=new PaymentModel();
  countries=Countries;
  cities=Cities;
  isSameAddress:boolean=false;



  constructor(
    public shopping: ShoppingCartService,
    private translate: TranslateService) {

    if (localStorage.getItem("language")) {
      this.language = localStorage.getItem("language") as string;
    }


    this.shopping.calcTotal();
    this.request.books=this.shopping.shoppingCarts;

  }

  changeTab(tabNumber:number){
    this.selectedTab=tabNumber;

  }
  payment(){}

  changeIsSameAddress(){
    if(this.isSameAddress){
      this.request.billingAddress={...this.request.shippingAddress}
    }
  }
}
