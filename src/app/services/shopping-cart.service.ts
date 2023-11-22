import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  shoppingCarts: any[] = [];
  prices:{value:number,currency:string}[]=[];
  count: number = 0;
  total:number=0;

  constructor() {
    if (localStorage.getItem("shoppingCarts")) {
      const carts: string | null = (localStorage.getItem("shoppingCarts"));
      if (carts !== null) {
        this.shoppingCarts = JSON.parse(carts)
        this.count = this.shoppingCarts.length;
      }

    }


    
  }
  calcTotal(){
    this.total=0;
    for(let s of this.shoppingCarts){
      this.prices.push({...s.price});
      this.total+=s.price.value;
    }
  }
}
