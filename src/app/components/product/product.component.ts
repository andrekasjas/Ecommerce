import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [
  ]
})
export class ProductComponent implements OnInit {
  product: any = {};
  constructor(private activatedRoute: ActivatedRoute, private productservice: ProductService ) {
    this.activatedRoute.params.subscribe( params=>{
      this.product = this.productservice.getProduct(params['id']);
    });
  }
  ngOnInit(): void {
  }
}
