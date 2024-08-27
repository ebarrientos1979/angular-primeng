import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { SidebarMainComponent } from './general/components/sidebar-main/sidebar-main.component';
import { DataViewModule } from 'primeng/dataview';
import { ProductoModule } from './producto/producto.module';
import { CardModule } from 'primeng/card';
import { GeneralModule } from './general/general.module';
import { provideHttpClient } from '@angular/common/http';
import { ImageModule } from 'primeng/image';
import { TagModule } from 'primeng/tag';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FormshoppingComponent } from './formularios/formshopping/formshopping.component';

@NgModule({
  declarations: [AppComponent, SidebarMainComponent, FormshoppingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProgressSpinnerModule,
    ButtonModule,
    ProductoModule,
    CardModule,
    ImageModule,
    DataViewModule,
    TagModule,
    GeneralModule,
    BrowserAnimationsModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
