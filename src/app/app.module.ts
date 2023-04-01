import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PurchasedComponent } from './components/purchased/purchased.component';
import { ItemsComponent } from './components/items/items.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    PurchasedComponent,
    ItemsComponent,
    SalesComponent,
    StocksComponent,
    SidebarComponent,
    SuplierComponent,
    FormComponent,
    PurchaseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
