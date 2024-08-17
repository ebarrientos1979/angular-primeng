import { Component } from '@angular/core';

interface ProductoInterface {
  oferta: number;
  nombreProducto: string;
  precio: number;
  linkImagen: string;
  descripcion: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  producto: ProductoInterface = {
    oferta: 1,
    nombreProducto: 'Pechuga de Pavita',
    precio: 13.5,
    linkImagen:
      'https://plazavea.vteximg.com.br/arquivos/HP-BANNERDESTACADO-FOOD-PP-D-FRESCOS-12-16-AGOSTO-JUN-5.webp',
    descripcion: 'Pechuga de Pavita en trozos x kg',
  };
}
