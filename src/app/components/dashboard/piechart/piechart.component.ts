import { Component, Input } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ApiService } from '../../stocks/api.service';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent {

  fields:any
   barColors = [
    // "red",
    // "green",
    // "yellow",
    // "orange",
    // "blue",
    // "brown"
    "#3c9d4e",
    "#7031ac",
    "#c94d6d",
    "#e4bf58",
    "#4174c9"
  ];
  chart:any;
  datasales:any;
  constructor(private StocksApi:ApiService){}


  createChart(){
    console.log("hello");
    this.chart=new Chart("myChart", {
      type: "pie",
      data: {
        labels: ['f','d','fs'],
        datasets: [{
          backgroundColor: this.barColors,
          data: [20,30,50]
        }]
      },
      options: {
       
      }
    });
  }


  ngOnInit(){
    this.getTotalSales();
    this.createChart();
  }
  getTotalSales(){
    this.StocksApi.getStocks().subscribe(res=>{
      this.datasales=res;
      this.chartSales();
    })
  }


  chartSales(){
    this.chart.data.labels=[...this.datasales.map(obj=>obj.name)];
    this.chart.data.datasets[0].data=[...this.datasales.map(obj=>obj.stocks)]
    console.warn(this.chart.data.labels);
    console.warn(this.chart.data.datasets[0].data);
    this.chart.update()
  }


}
