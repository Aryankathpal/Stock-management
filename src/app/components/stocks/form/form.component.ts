import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {


  form:any;
  constructor(
    public dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
     private api : ApiService,
     private router:Router
    
    ) {
        this.form= data.value;
        console.log(this.form)
    }
  

  onNoClick(): void {
    this.dialogRef.close();
  }
  submit(){
    if(this.form.id==null){
      this.api.addStock(this.form).subscribe(res=>{
       this.router.navigate(['/home/stocks-list'])
       this.dialogRef.close();
      })
    }
    else{
    this.api.updateStock(this.form).subscribe(res=>{
      this.dialogRef.close();
    },err=>{
      alert("Something went wrong");
    });
  }
  }
}
