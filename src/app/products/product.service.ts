import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts() {
    return [
      { id: 1, name: 'Produto A' },
      { id: 2, name: 'Produto B' },
      { id: 3, name: 'Produto C' },
    ];
  }
}
