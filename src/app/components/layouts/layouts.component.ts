import { Component } from '@angular/core';
import { driver } from "driver.js";
import { PopupService } from 'src/app/services/popup.service';


@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent {
  

  constructor(
    public popup:PopupService
  ) {
    
  }

  showDriver() {
    const driverObj = driver({
      popoverClass: "driverjs-theme",
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
        ,
        {
          element: '#language',
          popover: {
            title: 'Language',
            description: 'Buradan dili değiştirebilirsiniz'
          }
        }

      ]
    });

    driverObj.drive();

    this.popup.changePopupShow();
  }

  
}
