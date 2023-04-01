import { AfterViewInit, Component,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { PurchaseFormComponent } from './purchase-form/purchase-form.component';


@Component({
  selector: 'app-purchased',
  templateUrl: './purchased.component.html',
  styleUrls: ['./purchased.component.css'],
  
})
export class PurchasedComponent{

  purchasedItems = [
    {id:'1',date:'12-3-12',name:'Laptop',Quantity:3,supplier:'lentra',price:'50000',Total:'1500000'},
    {id:'2',date:'12-3-13',name:'phone',Quantity:1,supplier:'lentra',price:'5000',Total:'5000'},
    {id:'3',date:'12-3-14',name:'bag',Quantity:10,supplier:'lentra',price:'500',Total:'5000'},
    {id:'4',date:'12-3-15',name:'shoes',Quantity:3,supplier:'lentra',price:'5000',Total:'15000'}

  ]
  item:any;
  constructor(public dialog: MatDialog) {}

  add(n): void {
    this.item = this.purchasedItems.find(({id})=>id==n);
    const dialogRef = this.dialog.open(PurchaseFormComponent, {
      data: {value:this.item},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  edit(){
    alert('clicked');
  }


}