import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  Pipe,
  ViewChild,
} from '@angular/core';
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
  @Output() evento = new EventEmitter<Array<Producto>>();
  @ViewChild('ACProducto') myAC!: HTMLInputElement;

  items: any[] | undefined;
  productos: Producto[] = [];
  selectedItem: any;
  suggestions: any[] = [];

  constructor(private productosService: ProductosService) {}

  buscarProductos(e: KeyboardEvent) {
    if (this.myAC.value.length == 0) {
      this.evento.emit(this.productos); //TODO Emitimos señal para Productos sugeridos
    }
    //let myAC = document.getElementById('ac_producto') as HTMLInputElement;
    //console.log(myAC.getAttribute('ng-reflect-model'));
  }

  search(event: AutoCompleteCompleteEvent) {
    let copiaProductos = this.productos;
    this.suggestions = []; //TODO Limpiamos las sugerencias

    let productosSugeridos = copiaProductos.filter((sug) => {
      return sug.title.toLowerCase().includes(event.query.toLowerCase());
    }); //TODO Filtramos los PRODUCTOS seleccionados

    productosSugeridos.forEach((producto) => {
      this.suggestions.push(producto.title); //TODO Agregamos el titulo de nuestras sugerencias
    });

    this.evento.emit(productosSugeridos); //TODO Emitimos señal para Productos sugeridos
  }

  ngOnInit(): void {
    this.productosService.getProductos().subscribe((p: ProductoInterface) => {
      this.productos = p.productos;
    });
  }
}
