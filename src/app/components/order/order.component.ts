import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OrderModel } from 'src/app/models/order-model';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  orders:OrderModel[]=[];

  constructor(
    private http:HttpClient
  ){}

getAll(){
  
}



