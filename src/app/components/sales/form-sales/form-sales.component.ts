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
    }
    onNoClick(): void {
      this.dialogRef.close();
    }

    validation(){
      for (var key in this.form) {
        if (this.form[key] === null || this.form[key] == "")
            return false;
    }
    return true;
    }


    submit(){
      this.amountCalc(this.form.price,this.form.quantity);
      console.log(this.form);
      if(this.validation()){
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
  }else{
    alert("Input all the fields");
  }
}

    amountCalc(val,n){
      this.form.amount=val*n;
      console.log(this.form.amount);
    }


  
}
