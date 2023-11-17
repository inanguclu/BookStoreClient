import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RequestModel } from '../models/request.model';
import { BookModel } from '../models/book.model';
import { ShoppingCartService } from '../services/shopping-cart.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  books: BookModel[] = [];
  categories: any = [];
  pageNumbers: Number[] = [];
  request: RequestModel = new RequestModel();
  searchCategory: string = "";
  newData: any[] = [];


  constructor(
    private http: HttpClient,
    private shopping: ShoppingCartService
  ) {
    this.getCategories();

    
  }

  addShoppingCart(book: BookModel) {
    this.shopping.shoppingCarts.push(book)
    localStorage.setItem("shoppingCarts", JSON.stringify(this.shopping.shoppingCarts))
    this.shopping.count++;



    

  }

  feedData() {
    this.request.pageSize += 10;
    this.newData = [];
    this.getAll();
  }
  changeCategory(categoryId: number | null = null) {
    this.request.categoryId = categoryId
    this.request.pageSize = 0;
    this.feedData();


  }

  getAll() {
    this.http
      .post<any>(`https://localhost:7127/api/Books/GetAll/`, this.request)
      .subscribe(res => {
        this.books = res;
      })
  }

  getCategories() {
    this.http.get("https://localhost:7127/api/Categories/GetAll")
      .subscribe(res =>
        this.categories = res);
    this.getAll();

  }



}
