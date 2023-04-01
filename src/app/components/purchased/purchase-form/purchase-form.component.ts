import { Component ,Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrls: ['./purchase-form.component.css']
})
export class PurchaseFormComponent {

    // purchasedItems =    [ {id:'1',date:'12-3-12',name:'Laptop',Quanity:3,supplier:'lentra',price:'50000',Total:'1500000'}]


    constructor(
      public dialogRef: MatDialogRef<PurchaseFormComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
    ) {console.log(data)}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
}
