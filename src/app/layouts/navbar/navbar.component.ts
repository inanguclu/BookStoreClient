import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  constructor(
    private translate:TranslateService,
    public shopping:ShoppingCartService
    ){
    translate.setDefaultLang('en');
  }

  switchLanguage(event:any){
    this.translate.use(event.target.value);
  }
}
