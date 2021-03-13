import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from '../models/productResponseModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  apiUrl = 'https://localhost:44393/api/products/getall';
  productResponseModel: ProductResponseModel = {
    data: this.products,
    message: '',
    succes: true,
  };
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.httpClient
      .get<ProductResponseModel>(this.apiUrl)
      .subscribe((response) => {
        this.products = response.data;
      });
  }
}
