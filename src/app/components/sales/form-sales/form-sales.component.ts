import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiSalesService } from '../api-sales.service';

@Component({
  selector: 'app-form-sales',
  templateUrl: './form-sales.component.html',
  styleUrls: ['./form-sales.component.css']
})
export class FormSalesComponent {
  form:any;
  constructor(
    public dialogRef: MatDialogRef<FormSalesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
     private api : ApiSalesService
    
    ) {
        this.form= data.value;
        console.log(this.form)
    }
    onNoClick(): void {
      this.dialogRef.close();
    }
    submit(){
      if(this.form.id==null){
        this.api.addSales(this.form).subscribe(res=>{
         this.dialogRef.close();
        })
      }
      else{
      this.api.updateSales(this.form).subscribe(res=>{
        this.dialogRef.close();
      },err=>{
        alert("Something went wrong");
      });
    }
    }



  
}
