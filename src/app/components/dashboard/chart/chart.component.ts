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
  @Input() datas:any;


  chart:any;
  createChart(){
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17','2022',' 12' ], 
	       datasets: [
          {
            label: "Sales",
            data: [],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ["100","200"],
            backgroundColor: 'limegreen'
          }  
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
    this.chart.data.labels.push(this.Sales.map(obj=>obj.date));
    console.warn(this.chart.data.datasets[0].data);
    this.chart.update();
  }


 
}
