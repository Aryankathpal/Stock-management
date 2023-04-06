import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { globalComponent } from 'src/global-components';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getPurchasedItems(){ 
    console.log(globalComponent.url+'/purchased-items');
    return this.http.get(globalComponent.url+'/purchased-items')
  }
  updatePurchasedItems(body){
    return this.http.put(globalComponent.url+'/update-purchase/'+body.id,body)
  }
  addPurchasedItems(body){
    return this.http.post(globalComponent.url+'/add-purchase',body);
  }
  deletePurchase(id){
    return this.http.delete(globalComponent.url+'/delete-purchase/'+id);
  }
}
