import { Component } from '@angular/core';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-find-producto',
  templateUrl: './find-producto.component.html',
})
export class FindProductoComponent {
  items: any[] | undefined;

  selectedItem: any;

  suggestions: any[] = [];

  search(event: AutoCompleteCompleteEvent) {
    this.suggestions = [...Array(10).keys()].map(
      (item) => event.query + '-' + item
    );
  }
}
