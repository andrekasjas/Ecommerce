import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[]= [];
  constructor(private _productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.products = this._productService.getProducts();
    console.log(this.products);
  }
  viewProducts (idx:number){
    this.router.navigate(['/product', idx]);
  }


}

