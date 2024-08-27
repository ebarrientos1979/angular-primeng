import { Component, OnInit } from '@angular/core';
import { ProductosService } from './producto/services/productos.service';
import { ProductoInterface, Producto } from './producto/model/producto.model';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
