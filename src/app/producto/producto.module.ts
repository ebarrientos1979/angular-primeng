import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { Button } from 'primeng/button';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, Button],
  exports: [CardComponent],
})
export class ProductoModule {}
