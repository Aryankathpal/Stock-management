import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url= "http://localhost:8081"
  constructor(private http:HttpClient) { }

  getPurchasedItems(){ 
    return this.http.get(this.url+'/purchased-items')
  }
  updatePurchasedItems(body){
    return this.http.put(this.url+'/update-purchase/'+body.id,body)
  }
  addPurchasedItems(body){
    return this.http.post(this.url+'/add-purchase',body);
  }
}