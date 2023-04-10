import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiSuplierService } from './api-suplier.service';
import { FormSuplierComponent } from './form-suplier/form-suplier.component';

@Component({
  selector: 'app-suplier',
  templateUrl: './suplier.component.html',
  styleUrls: ['./suplier.component.css']
})
export class SuplierComponent {

  item:any;
  suppliers:any;
  dialogRef:any;
  form={
    date:null,
    item:null,
    name:null,
    phone:null,
    status:true
  }

  constructor(public dialog:MatDialog,private api:ApiSuplierService){

  }

  ngOnInit(){
    this.api.getAllSupplier().subscribe((result)=>{
      console.warn(result)
      this.suppliers = result;
    })
  }


  add(n){
    this.item = this.suppliers.find(({id})=>id==n);
    if(this.item==null){
      this.dialogRef = this.dialog.open(FormSuplierComponent, {
        data: {value:this.form},
      });
      this.closeDialog();
     
    }
    else{
    this.dialogRef = this.dialog.open(FormSuplierComponent, {
      data: {value:this.item},
    });
    this.closeDialog();

    }
  
  }

  delete(id){
    this.api.deleteSupplier(id).subscribe(res=>{
      this.api.getAllSupplier().subscribe((result)=>{
        this.suppliers = result;
      })
      console.log("called");
    });
  }

  closeDialog(){
    this.dialogRef.afterClosed().subscribe(result => {
      this.api.getAllSupplier().subscribe((result)=>{
        console.warn(result)
        this.suppliers = result;
      })
          console.log('The dialog was closed');
        });
   }




}
