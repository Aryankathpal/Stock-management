import { AfterViewInit, Component,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';
import { PurchaseFormComponent } from './purchase-form/purchase-form.component';


@Component({
  selector: 'app-purchased',
  templateUrl: './purchased.component.html',
  styleUrls: ['./purchased.component.css'],
  
})
export class PurchasedComponent{

  purchasedItems:any;
  item:any;
  constructor(public dialog: MatDialog,private api:ApiService) {}

  ngOnInit(){
    this.api.getPurchasedItems().subscribe((result)=>{
      console.warn(result)
      this.purchasedItems = result;
    })
  }

  add(n): void {
    this.item = this.purchasedItems.find(({id})=>id==n);
    const dialogRef = this.dialog.open(PurchaseFormComponent, {
      data: {value:this.item},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}