import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PurchasedComponent } from './components/purchased/purchased.component';
import { SalesComponent } from './components/sales/sales.component';
import { StocksComponent } from './components/stocks/stocks.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SuplierComponent } from './components/suplier/suplier.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator'; 
import { MatIconModule } from '@angular/material/icon';
import { FormComponent } from './components/stocks/form/form.component';
import { PurchaseFormComponent } from './components/purchased/purchase-form/purchase-form.component'
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormSalesComponent } from './components/sales/form-sales/form-sales.component';
import { FormSuplierComponent } from './components/suplier/form-suplier/form-suplier.component';
import { CardsComponent } from './components/dashboard/cards/cards.component';
import {HighchartsChartModule } from 'highcharts-angular';
import { ChartModule } from 'angular-highcharts';
import { ChartComponent } from './components/dashboard/chart/chart.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    PurchasedComponent,
    SalesComponent,
    StocksComponent,
    SidebarComponent,
    SuplierComponent,
    FormComponent,
    PurchaseFormComponent,
    FormSalesComponent,
    FormSuplierComponent,
    CardsComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    // NgModule
    FormsModule,
    HttpClientModule,
    HighchartsChartModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
