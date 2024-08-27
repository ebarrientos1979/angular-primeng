import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarMainComponent } from '../general/components/sidebar-main/sidebar-main.component';
import { ProductoModule } from '../producto/producto.module';
import { PrintboletasComponent } from './printboletas/printboletas.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [SidebarMainComponent, PrintboletasComponent, PageNotFoundComponent],
  imports: [CommonModule, ProductoModule],
  exports: [],
})
export class FormulariosModule {}
