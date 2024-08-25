import { Component, Input } from '@angular/core';
import { Producto } from '../../../producto/model/producto.model';

@Component({
  selector: 'app-sidebar-main',
  templateUrl: './sidebar-main.component.html',
  styleUrl: './sidebar-main.component.scss',
})
export class SidebarMainComponent {
  listaProductos: any[] = [];

  private _value: Producto | undefined;
  @Input()
  set producto(val: Producto | undefined) {
    console.log(val);
    if (val != undefined) {
      this.setearProducto(val!);
      this._value = val;
    }
  }

  get value(): Producto {
    return this._value!;
  }

  setearProducto(p: Producto) {
    let existe: Boolean = false;
    //TODO: verifico que no exista
    this.listaProductos.forEach((pr) => {
      if (pr.id == p.id) {
        pr.valor++;
        existe = true;
      }
    });
    if (existe) return;
    let p1 = { ...p, valor: 1 };
    this.listaProductos.push(p1);
  }
}
