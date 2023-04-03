import { Component ,Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrls: ['./purchase-form.component.css']
})

export class PurchaseFormComponent {

  public form={
    id:null,
    date:'',
    name:'',
    quantity:0,
    supplier:'',
    price:0,
    total:0
    
  }
   
    // purchasedItems =    [ {id:'1',date:'12-3-12',name:'Laptop',Quanity:3,supplier:'lentra',price:'50000',Total:'1500000'}]
    // form:{id= null,date='',name='',quantity=0,supplier='',price=0,total=''};
    constructor(
      public dialogRef: MatDialogRef<PurchaseFormComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private api:ApiService) {
          this.form= data.value;
      }



    onNoClick(): void {
      this.dialogRef.close();
    }
    submit(forms){
      if(forms.id==null){
        this.api.addPurchasedItems(forms).subscribe(res=>{
          this.dialogRef.close();
        })
      }
      else{
      this.api.updatePurchasedItems(this.form).subscribe(res=>{
        this.dialogRef.close();
      },err=>{
        alert("Something went wrong");
      });
    }
  }
}
