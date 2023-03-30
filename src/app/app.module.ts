import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    SuplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
