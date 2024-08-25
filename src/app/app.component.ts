import { Component, OnInit } from '@angular/core';
import { ProductosService } from './producto/services/productos.service';
import { ProductoInterface, Producto } from './producto/model/producto.model';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  productos: Producto[] = [];
  produc: Producto | undefined;

  constructor(
    private productosService: ProductosService,
    private meta: Meta,
    private titleService: Title
  ) {}

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
    this.setMetaTags();
  }

  setMetaTags() {
    this.titleService.setTitle('Aplicacion Dinamica en Angular');

    this.meta.addTags([
      { name: 'og:title', content: 'Titulo de Prueba' },
      { name: 'og:description', content: 'Descripcion del video' },
      {
        name: 'og:image',
        content: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      },
      {
        name: 'og:url',
        content: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      },
      { name: 'og:type', content: 'image.other' },

      { name: 'og:site_name', content: '' },
      { name: 'og:locale', content: 'es_ES' },
    ]);
  }
}
