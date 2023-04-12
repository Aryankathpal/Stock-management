import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ApiSalesService } from '../sales/api-sales.service';
import { ApiSuplierService } from '../suplier/api-suplier.service';
import { ApiService as StockApi } from '../stocks/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
data=[
  {name:"Sales",value:"-",subValue:'Total'},
  {name:"Purchased Items",value:"-",subValue:'Total'},
  {name:"Suppliers",value:"-",subValue:'Total'},
  {name:"Stocks",value:"-",subValue:'Items'}
]

Sales:any;
purchase:any;
supplier:any;
stocks:any;
salesChart:any;
constructor(private SalesApi:ApiSalesService,
  private PurchaseApi:ApiService,
  private SupplierApi:ApiSuplierService,
  private StocksApi:StockApi
  ){}

ngOnInit(){
  console.log("started");
  this.getTotalSales();
  this.getPurchasedItems();
  this.getSuppier();
  this.getTotalStocks();
  // console.log(this.purchase);
}

getTotalSales(){
  this.SalesApi.getAllSales().subscribe(res=>{
    this.Sales=res;
    this.data[0].value = this.Sales.reduce(function(a,res){return a+res.amount},0);
    // this.chartSales();
  })
}

getPurchasedItems(){
  this.PurchaseApi.getPurchasedItems().subscribe(res=>{
    this.purchase=res;
    this.data[1].value=this.purchase.length;
  })
}

getSuppier(){
  this.SupplierApi.getAllSupplier().subscribe(res=>{
    this.supplier=res;
    this.data[2].value=this.supplier.length;
  })
}

getTotalStocks(){
  this.StocksApi.getStocks().subscribe(res=>{
    this.stocks=res;
    this.data[3].value=this.stocks.reduce(function(a,res){return a+res.stocks},0)
  })
}



}
