import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoInterface } from '../model/producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(private http: HttpClient) {}

  getProductos = (): Observable<ProductoInterface> => {
    return this.http.get<ProductoInterface>('http://localhost:3004/lista');
  };
}
