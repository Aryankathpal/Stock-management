import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiSalesService } from './api-sales.service';
import { FormSalesComponent } from './form-sales/form-sales.component';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent {

  dialogRef:any;
  item:any;
  form={
          id:null,
          date:null,
          name:null,
          invoice:null,
          supplier:null,
          quantity:null,
          price:null,
          amount:null,
        }
   orders:any;
  
  constructor(private api:ApiSalesService,public dialog:MatDialog){

  }
  ngOnInit(){
    this.api.getAllSales().subscribe((result)=>{
      console.warn(result)
      this.orders = result;
    })
  }
  
  
  
  add(n){
    this.item = this.orders.find(({id})=>id==n);
    if(this.item==null){
      this.dialogRef = this.dialog.open(FormSalesComponent, {
        data: {value:this.form},
      });
      this.closeDialog();
     
    }
    else{
    this.dialogRef = this.dialog.open(FormSalesComponent, {
      data: {value:this.item},
    });
    this.closeDialog();

    }
  
  }
  delete(id){
    this.api.deleteSales(id).subscribe(res=>{
      this.api.getAllSales().subscribe((result)=>{
        this.orders = result;
      })
      console.log("called");
    });
  }
  closeDialog(){
    this.dialogRef.afterClosed().subscribe(result => {
      this.api.getAllSales().subscribe((result)=>{
        console.warn(result)
        this.orders = result;
      })
          console.log('The dialog was closed');
        });
   }
}
