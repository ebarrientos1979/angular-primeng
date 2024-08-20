import { Component, OnInit } from '@angular/core';
import { ProductosService } from './producto/services/productos.service';
import { ProductoInterface, Producto } from './producto/model/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productosService
      .getProductos()
      .subscribe((data: ProductoInterface) => {
        this.productos = data.productos;
      });
  }
}
