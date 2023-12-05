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


  [key: string]: any;
  language: string = "en";
  selectedTab: number = 1;
  request: PaymentModel = new PaymentModel();
  countries = Countries;
  cities = Cities;
  isSameAddress: boolean = false;
  cartNumber1: string = "5890";
  cartNumber2: string = "0400";
  cartNumber3: string = "0000";
  cartNumber4: string = "0016";
  expireMonthAndYear: string = "2023-07";



  constructor(
    public shopping: ShoppingCartService,
    private translate: TranslateService) {

    if (localStorage.getItem("language")) {
      this.language = localStorage.getItem("language") as string;
    }


    this.shopping.calcTotal();
    this.request.books = this.shopping.shoppingCarts;

  }

  changeTab(tabNumber: number) {
    this.selectedTab = tabNumber;

  }


  payment() {
    this.request.paymentCart.expireMonth = this.expireMonthAndYear.substring(5);
    this.request.paymentCart.expireYear = this.expireMonthAndYear.substring(0, 4);
    this.request.paymentCart.cardNumber = this.cartNumber1 + this.cartNumber2 + this.cartNumber3 + this.cartNumber4;


    this.shopping.payment(this.request, (res) => {

    })
  }

  changeIsSameAddress() {
    if (this.isSameAddress) {
      this.request.billingAddress = this.request.shippingAddress
    }
  }


  gotoNextInputIf4Lenght(inputCount: string = "", value: string = "") {


    this[`cartNumber${inputCount}`] = value.replace(/[^0-9]/g, "");
    value = value.replace(/[^0-9]/g, "");


    if (value.length === 4) {
      if (inputCount === "4") {
        const el = document.getElementById("expireMonthAndYear")
        el?.focus();
      } else {
        const id: string = `cartNumber${+inputCount + 1}`
        const el: HTMLInputElement = document.getElementById(id) as HTMLInputElement
        el.focus();
      }
    }
  }

  setExpireMonthAndYear() {
    //sadece sayıları kabul ediyoruz 
    this.expireMonthAndYear = this.expireMonthAndYear.replace(/[^0-9]/g, "");


    // eger string uzunlugu 2den buyukse 2 ve 3 arasındaysa / ekliyoruz 
    if (this.expireMonthAndYear.length > 2) {
      this.expireMonthAndYear = this.expireMonthAndYear.substring(0, 2) + "/" + this.expireMonthAndYear.substring(2);
    }


    //ayın 01 ile 12 arasıdna olup olmadıgını kontrol ediyoruz
    if (this.expireMonthAndYear.length >= 2) {
      const month = parseInt(this.expireMonthAndYear.substring(0, 2))
      if (month === 0) {
        this.expireMonthAndYear = "01" + this.expireMonthAndYear.substring(2);
      } else if (month > 12) {
        this.expireMonthAndYear = "12" + this.expireMonthAndYear.substring(2);
      }
    }

    if (this.expireMonthAndYear.length > 4) {
      const el = document.getElementById("cvc");
      el?.focus();
    }
  }
}
