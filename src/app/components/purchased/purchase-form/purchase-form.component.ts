import { Component ,Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ApiService as stockApi} from '../../stocks/api.service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrls: ['./purchase-form.component.css']
})

export class PurchaseFormComponent {

  form:any

    // purchasedItems =    [ {id:'1',date:'12-3-12',name:'Laptop',Quanity:3,supplier:'lentra',price:'50000',Total:'1500000'}]
    // form:{id= null,date='',name='',quantity=0,supplier='',price=0,total=''};
    constructor(
      public dialogRef: MatDialogRef<PurchaseFormComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
     private StockApi : stockApi,
     private api:ApiService
      ) {
          this.form= data.value;
      }

      validation(){
        console.warn(this.form);
        for (var key in this.form) {
          if (this.form[key] === null || this.form[key] == "")
              return false;
      }
      return true;
      }

    onNoClick(): void {
      this.dialogRef.close();
    }
    submit(){
      this.amountCalc(this.form.price,this.form.quantity);
      if(this.validation()){
      if(this.form.id==null){
        this.api.addPurchasedItems(this.form).subscribe(res=>{
          this.updateStocks();
          this.dialogRef.close();
        })
      }
      else{
      this.api.updatePurchasedItems(this.form).subscribe(res=>{
        this.updateStocks();
        this.dialogRef.close();
      },err=>{
        alert("Something went wrong");
      });
    }
  }
  else{
    alert("Input all the fields")
  }
}

  amountCalc(val,n){
    this.form.total=val*n;
    console.log(this.form.total);
  }
  updateStocks(){
    this.StockApi.updateOrderStocks(this.form.name,this.form.quantity).subscribe(res=>{
      console.warn(this.form);
    })
  }
}
