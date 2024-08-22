import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto, ProductoInterface } from '../../model/producto.model';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-find-producto',
  templateUrl: './find-producto.component.html',
})
export class FindProductoComponent implements OnInit {
  items: any[] | undefined;
  productos: Producto[] = [];
  selectedItem: any;
  suggestions: any[] = [];
  suggestionsOrig: any[] = [];

  constructor(private productosService: ProductosService) {}

  search(event: AutoCompleteCompleteEvent) {
    let sugerencia = this.suggestionsOrig;
    this.suggestions = sugerencia.filter((sug) => {
      return sug.toLowerCase().includes(event.query.toLowerCase());
    });
  }

  ngOnInit(): void {
    this.productosService.getProductos().subscribe((p: ProductoInterface) => {
      this.productos = p.productos;
      this.productos.forEach((producto) => {
        this.suggestionsOrig.push(producto.title);
        this.suggestionsOrig.push(producto.description);
      });
    });
  }
}
