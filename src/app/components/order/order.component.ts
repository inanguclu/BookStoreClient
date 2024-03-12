import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  orders:

}


export class OrderModel{

     id : number = 0;
     orderNumber:string="";
     Book Book="";
     int Quantity="";
     Money Price="";
     DateTime CreatedAt="";
     DateTime PaymentDate="";
     string PaymentType="";
     string PaymentNumber="";
      List<OrderStatus> OrderStatuses="";
     string Comment="";
     short? Raiting="";

}