import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { globalComponent } from 'src/global-components';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) {

  }

  getStocks(){
    return this.http.get(globalComponent.url+'/items');
  }
  getStocksById(body){
    return this.http.get(globalComponent.url+'/item/'+body.id);
  }
  updateStock(body){
    return this.http.put(globalComponent.url+'/update-item/'+body.id,body);
  }
  deleteStock(id){
    return this.http.delete(globalComponent.url+'/delete-item/'+id);
  }
  addStock(body){
    return this.http.post(globalComponent.url+'/add-stock',body);
  }

}
