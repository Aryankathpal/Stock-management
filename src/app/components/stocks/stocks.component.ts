import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormComponent } from './form/form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent{
  stockItems = [
    {id:'1',date:'12-3-12',name:'Laptop',Quanity:3,supplier:['lentra','samsung','google'],Available:10},
    {id:'2',date:'12-3-13',name:'phone',Quanity:1,supplier:['lentra'],Available:20},
    {id:'3',date:'12-3-14',name:'bag',Quanity:10,supplier:['lentra'],Available:30},
    {id:'4',date:'12-3-15',name:'shoes',Quanity:3,supplier:['lentra'],Available:40}

  ]
  item : any
  constructor(public dialog:MatDialog){

  }

  edit(){
    console.log("clicked");
  }

  add(ids){
    this.item = this.stockItems.find(({id})=>id==ids);
    const dialogRef = this.dialog.open(FormComponent, {
      panelClass:'dailogs',
      data: {value:this.item},
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
}
