import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/products.service';


@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  products: any [] = [];
  termino: string;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.activatedRoute.params.subscribe(params => {
        this.termino = params['termino'];
        this.products = this.productService.searchProducts(params['termino']);
        console.log(this.products);
      });
    });
  }

}
