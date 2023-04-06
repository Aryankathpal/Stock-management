import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { globalComponent } from 'src/global-components';

@Injectable({
  providedIn: 'root'
})
export class ApiSuplierService {

  constructor(private http:HttpClient) {}

  getSupplier(id){
    return this.http.get(globalComponent.url+'/supplier/'+id);
  }
  getAllSupplier(){
    return this.http.get(globalComponent.url+'/suppliers');
  }
  addSupplier(body){
    return this.http.post(globalComponent.url+'/add-supplier',body);
  }
  updateSupplier(body){
    return this.http.put(globalComponent.url+'/update-supplier/'+body.id,body);
  }
  deleteSupplier(id){
    return this.http.delete(globalComponent.url+'/delete-supplier/'+id);
  }
}
