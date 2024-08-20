import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../model/producto.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input() producto!: Producto;

  ngOnInit(): void {}
}
