import { Component } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {


  language: string = "en";
  selectedTab: number = 1;



  constructor(
    public shopping: ShoppingCartService,
    private translate: TranslateService) {

    if (localStorage.getItem("language")) {
      this.language = localStorage.getItem("language") as string;
    }


    this.shopping.calcTotal();

  }

  changeTab(tabNumber:number){
    this.selectedTab=tabNumber;

  }
  payment(){
    
  }
}
