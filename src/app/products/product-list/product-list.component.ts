import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: { id:number, name: string }[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
      this.products = this.productService.getProducts();
  }
}
