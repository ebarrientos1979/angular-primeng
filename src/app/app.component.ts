import { Component, OnInit } from '@angular/core';
import { ProductoInterface } from './producto/model/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  productos: ProductoInterface[] = [];

  ngOnInit(): void {
    this.productos.push({
      oferta: 0,
      nombreProducto: 'Pechuga de Pavita',
      descripcion: 'Pechuga de Pavita en trozos',
      precio: 13.8,
      linkImagen:
        'https://plazavea.vteximg.com.br/arquivos/HP-BANNERDESTACADO-FOOD-PP-D-FRESCOS-12-16-AGOSTO-JUN-5.webp',
    });
  }
}
