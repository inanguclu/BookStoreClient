import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { RequestModel } from '../../models/request.model';
import { BookModel } from '../../models/book.model';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { SwalService } from '../../services/swal.service';
import { TranslateService } from '@ngx-translate/core';
import { AddShoppingCartModel } from 'src/app/models/add-shopping-cart.model';
import { AuthService } from 'src/app/services/auth.service';
import { ErrorService } from 'src/app/services/error.service';
import { driver } from "driver.js";

const driverObj = driver({
  showProgress: true,
  steps: [
    { element: '#categories', popover: { title: 'Categories', description: 'Bu kısımdan Kategorileri seçebilirsiniz' } },
    
  ]
});


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
  loaderDatas = [1, 2, 3, 4, 5, 6];
  isLoading: boolean = true;


  constructor(
    private http: HttpClient,
    private shopping: ShoppingCartService,
    private swal: SwalService,
    private translate: TranslateService,
    private auth: AuthService,
    private error: ErrorService

  ) {
    if (localStorage.getItem("request")) {
      const requestString: any = localStorage.getItem("request");
      const requestObj = JSON.parse(requestString);
      this.request = requestObj;
    }
    this.getCategories();
  
  }


  showDriverJs(){
    driverObj.drive();
  }


  addShoppingCart(book: BookModel) {
    if (localStorage.getItem("response")) {
      const data: AddShoppingCartModel = new AddShoppingCartModel();
      data.bookId = book.id;
      data.price = book.price;
      data.quantity = 1;
      data.userId = this.auth.userId;

      this.http.post("https://localhost:7127/api/ShoppingCarts/Add", data).subscribe({
        next: (res: any) => {
          this.shopping.checkLocalStoreForShoppingCarts();
          this.translate.get("addBookInShoppingCartIsSuccessful").subscribe(res => {
            this.swal.callToast(res);
          });
        },
        error: (err: HttpErrorResponse) => {
          this.error.errorHandler(err);
        }
      });
    } else {
      this.shopping.shoppingCarts.push(book);
      localStorage.setItem("shoppingCarts", JSON.stringify(this.shopping.shoppingCarts));
      this.translate.get("addBookInShoppingCartIsSuccessful").subscribe(res => {
        this.swal.callToast(res);
      })
    };
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
    this.isLoading = true;
    this.http
      .post<BookModel[]>(`https://localhost:7127/api/Books/GetAll/`, this.request)
      .subscribe({
        next: (res: any) => {
          this.books = res;
          this.isLoading = false;
          localStorage.setItem("request", JSON.stringify(this.request));
        },
        error: (err: HttpErrorResponse) => {
          this.error.errorHandler(err);
        }
      })
  }

  getCategories() {
    this.isLoading = true;
    this.http.get("https://localhost:7127/api/Categories/GetAll")
      .subscribe({
        next: (res: any) => {
          this.categories = res
          this.getAll();
          this.isLoading = false;
        },
        error: (err: HttpErrorResponse) => {
          this.error.errorHandler(err);
        }
      });
  }
}
