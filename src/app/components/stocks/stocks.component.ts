import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormComponent } from './form/form.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from './api.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent{

  searchText:any;
  stockItems:any;
  dialogRef:any;
  deletecheck = false;
  form={
    name:null,
    supplier:null,
    stocks:null,
    date:null,
  }
  item : any
  constructor(public dialog:MatDialog,public api:ApiService){

  }

  ngOnInit(){
    this.api.getStocks().subscribe((result)=>{
      console.warn(result)
      this.stockItems = result;
    })
  }

  delete(id){
    this.api.deleteStock(id).subscribe(res=>{
      this.api.getStocks().subscribe((result)=>{
        this.stockItems = result;
      })
      console.log("called");
    });
  }

  add(n){
    this.item = this.stockItems.find(({id})=>id==n);
    if(this.item==null){
      this.dialogRef = this.dialog.open(FormComponent, {
        data: {value:this.form},
      });
      this.closeDialog();
     
    }
    else{
    this.dialogRef = this.dialog.open(FormComponent, {
      data: {value:this.item},
    });
    this.closeDialog();

    }
  
 }

 closeDialog(){
  this.dialogRef.afterClosed().subscribe(result => {
    this.api.getStocks().subscribe((result)=>{
      console.warn(result)
      this.stockItems = result;
    })
        console.log('The dialog was closed');
      });
 }
}
