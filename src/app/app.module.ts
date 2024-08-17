import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { SidebarMainComponent } from './general/components/sidebar-main/sidebar-main.component';
import { DataViewModule } from 'primeng/dataview';
import { ProductoModule } from './producto/producto.module';
import { CardModule } from 'primeng/card';
import { GeneralModule } from './general/general.module';

@NgModule({
  declarations: [AppComponent, SidebarMainComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ProductoModule,
    CardModule,
    DataViewModule,
    GeneralModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
