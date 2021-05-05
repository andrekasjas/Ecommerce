import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private products: Product[] = [
        {
            name: 'Portátil Huawei ',
            description: 'Matebook 13',
            img: './assets/img/huawei.JPG',
            price: '3.379.900'
        },
        {
            name: 'Portátil Asus ',
            description: 'X409ma-bv155t',
            img: './assets/img/asus.JPG',
            price: '1.219.900'
        },
        {
            name: 'Portatil Dell',
            description: 'Inspiron 3493',
            img: './assets/img/dell.JPG',
            price: '1.899.900'
        },
        {
            name: 'Portátil Hp',
            description: '255 G7 Amd Athlon',
            img: './assets/img/hp.JPG',
            price: '1.339.900'
        },
        {
            name: 'Portátil Acer',
            description: '34fr',
            img: './assets/img/acer.JPG',
            price: '1.759.900'
        },
        {
            name: 'Lenovo Ideapad',
            description: 'L340 I5 9300h',
            img: './assets/img/lenovo.JPG',
            price: '3.299.999'
        },
        {
            name: 'Macbook',
            description: 'Air 2020',
            img: './assets/img/makbuk.JPG',
            price: '4.394.000'
        }
    ]
    constructor(){
        console.log('serice rinning');
    }
    getProducts(){
        return this.products;
    }

    getProduct(idx){
        return this.products[idx];
    }

    searchProducts ( termino: string){
        let productsArr: Product[]=[];
        termino = termino.toLowerCase();
        for(const product of this.products){
           const name = product.name.toLowerCase();
           if(name.indexOf(termino) >= 0){
             productsArr.push(product);
           }
         }
         return productsArr;
      }
}

export interface Product{
    name: string,
    description: string,
    img: string,
    price: string
  }