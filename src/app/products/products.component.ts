import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Subscription';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: any[] = [];
  filteredProducts: any[] = [];
  activeCategory: string;
  subscription: Subscription;

  constructor(private productService: ProductService,
    private route: ActivatedRoute) {

    this.subscription = this.productService.getProducts().switchMap(
      products => {
        this.filteredProducts = this.products = products;
        return this.route.queryParamMap; })
    .subscribe(param => {
      this.activeCategory = param.get('category');
      this.filteredProducts = this.activeCategory ?
      this.products.filter(product => product.category === this.activeCategory) :
      this.products;
      });
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  search(query) {
    this.filteredProducts = this.products
    .filter(product => product.title.toLowerCase().includes(query.value.toLowerCase()));
    if (this.activeCategory) {
      this.filteredProducts = this.filteredProducts
      .filter(product => product.category === this.activeCategory);
    }
  }

}
