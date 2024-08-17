import { Component, Input, OnInit } from '@angular/core';
import { ProductoInterface } from '../../model/producto.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input() producto!: ProductoInterface;

  ngOnInit(): void {}
}
