import { Component, Input } from '@angular/core';
// import * as Highcharts from 'highcharts';
import { SalesService } from '../../sales.service';
import { ApiSalesService } from '../../sales/api-sales.service';
// import { Chart } from 'angular-highcharts';
import {Chart} from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  chart:any;
  createChart(){
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: [], 
	       datasets: [
          {
            label: "Sales",
            data: [],
            backgroundColor: 'blue'
          }, 
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }


  ngOnInit(){
    this.getTotalSales();
    this.createChart();

  }
  Sales:any;
  salePointer=[];
  constructor(private SalesApi:ApiSalesService){}

  
  getTotalSales(){
    this.SalesApi.getAllSales().subscribe(res=>{
      this.Sales=res;
      this.chartSales(this.Sales);
    })
  }

  chartSales(arr:any){
    arr.sort(function(a, b) {
      return (a.id - b.id);
    });
    this.salePointer = this.Sales.map(obj=>obj.amount);
    this.chart.data.datasets[0].data=[...this.salePointer];
    this.chart.data.labels=[...this.Sales.map(obj=>obj.date)];
    console.warn(this.chart.data.datasets[0].data);
    this.chart.update();
  }


 
}
