import { Component } from '@angular/core';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent {
  isPopupShow: boolean = false;
  processBar: Number = 0;


  constructor() {
    setTimeout(() => {
      this.changePopupShow();
      setInterval(() => {
        this.processBar += 8;
      }, 500)
    }, 2000);

    setTimeout(() => {
      this.changePopupShow();
    }, 8000);
  }


  changePopupShow() {
    this.isPopupShow = !this.isPopupShow;
  }
}
