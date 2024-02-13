import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { driver } from "driver.js";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  language: string = "en";


  constructor(
    private translate: TranslateService,
    public shopping: ShoppingCartService,
    public auth: AuthService,
    public router:Router
  ) {
    if (localStorage.getItem("language")) {
      this.language = (localStorage.getItem("language") as string);

    }
    translate.setDefaultLang(this.language);

  }

  showDriver(){
    const driverObj = driver({
      popoverClass:"driverjs-theme",
      showProgress: true,
      steps: [
        {
          element: '#categories',
          popover: {
            title: 'Categories',
            description: 'Bu kısımdan Kategorileri seçebilirsiniz'
          }
        },
        {
          element: '#bookSearch',
          popover: {
            title: 'Book Search',
            description: 'Bu kısımdan kitap arayabilirsiniz'
          }
        },
        {
          element: '#book0',
          popover: {
            title: 'Book',
            description: 'Bu kısımdan kitap detaylarını görebilirsiniz'
          }
        },
        {
          element: '#addShoppingCartBtn0',
          popover: {
            title: 'Add Shopping Cart',
            description: 'Bu kısımdan kitabı sepete ekleyebilirsiniz'
          }
        }
    
      ]
    });

    driverObj.drive();
  }

  switchLanguage(event: any) {
    localStorage.setItem("language", event.target.value)
    this.language = event.target.value;
    this.translate.use(this.language);
    location.reload();
  }

  logout() {
    localStorage.removeItem("response");
    this.shopping.checkLocalStoreForShoppingCarts();
    this.router.navigateByUrl("/login");


  }
}
