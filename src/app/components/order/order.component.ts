import { Component } from '@angular/core';
import { BookModel, Money } from 'src/app/models/book.model';
import { OrderStatusEnum } from 'src/app/models/order-status-enum';
import { OrderStatusModel } from 'src/app/models/order-status-model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  orders:

}


export class OrderModel {

  id: number = 0;
  orderNumber: string = "";
  book: BookModel = new BookModel();
  quantity: number = 0;
  price: Money = new Money();
  createdAt: string = "";
  paymentDate: string = "";
  paymentType: string = "";
  paymentNumber: string = "";
  orderStatuses: OrderStatusModel[] = [];
  comment: string = "";
  raiting: number = 0;

}


