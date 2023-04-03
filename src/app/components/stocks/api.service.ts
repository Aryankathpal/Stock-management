import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url= "http://localhost:8081"
  constructor(public http:HttpClient) {

  }

  getStocks(){
    return this.http.get(this.url+'/items');
  }
  getStocksById(body){
    return this.http.get(this.url+'/item/'+body.id);
  }
  updateStock(body){
    return this.http.put(this.url+'/update-item/'+body.id,body);
  }
  deleteStock(body){
    return this.http.delete(this.url+'/delete-item/'+body.id);
  }
  addStock(body){
    return this.http.post(this.url+'/add-stock',body);
  }

}
