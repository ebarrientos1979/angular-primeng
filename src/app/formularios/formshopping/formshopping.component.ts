import { Component, OnInit } from '@angular/core';
import {
  Producto,
  ProductoInterface,
} from '../../producto/model/producto.model';
import { ProductosService } from '../../producto/services/productos.service';

@Component({
  selector: 'app-formshopping',
  templateUrl: './formshopping.component.html',
})
export class FormshoppingComponent implements OnInit {
  productos: Producto[] = [];
  produc: Producto | undefined;

  constructor(private productosService: ProductosService) {}

  clickListado(p: Producto) {
    this.produc = p;
  }

  sugerir(productos: Array<Producto>) {
    this.productos = productos;
  }

  ngOnInit(): void {
    this.productosService
      .getProductos()
      .subscribe((data: ProductoInterface) => {
        this.productos = data.productos;
      });
  }
}
