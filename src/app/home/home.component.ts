import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RequestModel } from '../models/request.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  response:any;
  categories:any=[];
  pageNumbers:Number[]=[];
  request:RequestModel=new RequestModel();

  
  constructor(private http:HttpClient){
    this.getAll();
    this.getCategories();
  }

  getAll(pageNumber:any=1){
    this.request.pageNumber=pageNumber;
    this.http
    .post(`https://localhost:7127/api/Books/GetAll/`,this.request)
    .subscribe(res=>{
      this.response=res;
      this.setPageNumber();
    })
  }

  getCategories(){
    this.http.get("https://localhost:7127/api/Categories/GetAll")
    .subscribe(res=> this.categories=res);

  }

  setPageNumber(){
    this.pageNumbers=[];
    for(let i =0;i<this.response.totalPageCount;i++)
    {
      this.pageNumbers.push(i+1)
    }

  }

}
