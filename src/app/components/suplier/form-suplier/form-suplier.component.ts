import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiSuplierService } from '../api-suplier.service';

@Component({
  selector: 'app-form-suplier',
  templateUrl: './form-suplier.component.html',
  styleUrls: ['./form-suplier.component.css']
})
export class FormSuplierComponent {

  form:any;
  constructor(
    public dialogRef: MatDialogRef<FormSuplierComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
     private api : ApiSuplierService,
    
    ) {
        this.form= data.value;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  submit(){
    console.warn(this.form);
    if(this.form.id==null){
      this.api.addSupplier(this.form).subscribe(res=>{
       this.dialogRef.close();
      })
    }
    else{
    this.api.updateSupplier(this.form).subscribe(res=>{
      this.dialogRef.close();
    },err=>{
      alert("Something went wrong");
    });
  }
  }
}
