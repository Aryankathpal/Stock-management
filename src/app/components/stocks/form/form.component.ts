import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {


  form:any;
  constructor(
    public dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private api : ApiService) {
        this.form= data.value;
        console.log(this.form)
    }
  

  onNoClick(): void {
    this.dialogRef.close();
  }
  submit(){
    console.warn("heeeeeeee");
    this.api.updatePurchasedItems(this.form)
    this.dialogRef.close();

  }
}
