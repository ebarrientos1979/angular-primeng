import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { Button } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, Button, CardModule],
  exports: [CardComponent],
})
export class ProductoModule {}
