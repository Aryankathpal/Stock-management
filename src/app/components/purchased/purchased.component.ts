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

  check=true;
  purchasedItems:any;
  item:any;
  public form={
    date:null,
    name:null,
    quantity:null,
    supplier:null,
    price:null,
    total:null
    
  }
  dialogRef:any
  constructor(public dialog: MatDialog,private api:ApiService) {}

  ngOnInit(){
    this.api.getPurchasedItems().subscribe((result)=>{
      this.purchasedItems = result;
    })
  }

  delete(id){
    this.api.deletePurchase(id).subscribe(res=>{
      this.api.getPurchasedItems().subscribe((result)=>{
        this.purchasedItems = result;
      })
    });
  }

  add(n): void {
    this.item = this.purchasedItems.find(({id})=>id==n);
    if(this.item==null){
       this.dialogRef = this.dialog.open(PurchaseFormComponent, {
        data: {value:this.form},
      });
      this.closeDialog();
    }
    else{
    this.dialogRef = this.dialog.open(PurchaseFormComponent, {
      data: {value:this.item},
    });
    this.closeDialog();
   }
  }

  closeDialog(){
    this.dialogRef.afterClosed().subscribe(result => {
      this.api.getPurchasedItems().subscribe((result)=>{
        console.warn(result)
        this.purchasedItems = result;
      })
      console.log('The dialog was closed');
    });
  }

}