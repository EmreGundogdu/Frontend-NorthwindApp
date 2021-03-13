import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from '../models/productResponseModel';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  productResponseModel: ProductResponseModel = {
    data: this.products,
    message: '',
    succes: true,
  };
  constructor(private productService:ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe(response=>{
      this.products = response.data;
    })
  }
}
