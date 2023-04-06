import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { globalComponent } from 'src/global-components';

@Injectable({
  providedIn: 'root'
})
export class ApiSalesService {

  constructor(public http:HttpClient) { }

  addSales(body){
    return this.http.post(globalComponent.url+'/add-order',body);
  }
  updateSales(body){
    return this.http.put(globalComponent.url+'/update-order/'+body.id,body);
  }
  getAllSales(){
    return this.http.get(globalComponent.url+'/orders');
  }
  getSalesById(id){
    return this.http.get(globalComponent.url+'/orders/'+id);
  }
  deleteSales(id){
    return this.http.delete(globalComponent.url+'/delete-order/'+id);
  }
}
