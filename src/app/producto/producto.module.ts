import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { Button } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FindProductoComponent } from './components/find-producto/find-producto.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CardComponent, FindProductoComponent],
  imports: [CommonModule, Button, CardModule, AutoCompleteModule, FormsModule],
  exports: [CardComponent, FindProductoComponent],
})
export class ProductoModule {}
