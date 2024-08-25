import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../../model/producto.model';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input() producto!: Producto;
  @Output() clickButton = new EventEmitter<Producto>();

  click(e: any) {
    this.clickButton.emit(this.producto);
  }

  ngOnInit(): void {}
}
