import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
})
export class MenuMainComponent implements OnInit {
  items: MegaMenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Gestión Ventas',
        icon: 'pi pi-box',
        items: [
          [
            {
              label: 'Acciones',
              items: [
                {
                  label: 'Carrito Compra',
                  command: () => {
                    this.router.navigate(['/carrito-compras']);
                  },
                },
                {
                  label: 'Impresion Boletas',
                  command: () => {
                    this.router.navigate(['boletas']);
                  },
                },
                { label: 'Control Inventarios' },
                { label: 'Stock' },
                { label: 'Salir' },
              ],
            },
          ],
        ],
      },
    ];
  }
}
