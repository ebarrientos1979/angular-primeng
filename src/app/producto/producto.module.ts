import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { Button } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FindProductoComponent } from './components/find-producto/find-producto.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { ImageModule } from 'primeng/image';
import { Title2Lines } from './pipes/title2lines.pipe';
import { ListadoComponent } from './components/listado/listado.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [
    CardComponent,
    FindProductoComponent,
    Title2Lines,
    ListadoComponent,
  ],
  imports: [
    CommonModule,
    Button,
    ProgressSpinnerModule,
    CardModule,
    AutoCompleteModule,
    FormsModule,
    ImageModule,
  ],
  exports: [CardComponent, FindProductoComponent, ListadoComponent],
})
export class ProductoModule {}
