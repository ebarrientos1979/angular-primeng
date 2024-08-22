import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Producto } from '../../model/producto.model';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  @Input()
  productos!: Producto[];
}
