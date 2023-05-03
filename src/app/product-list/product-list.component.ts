import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from 'src/store/app.interface';
import { Store, select } from '@ngrx/store';
import { selectCoffeeStatus } from 'src/store/selectors/app.selector';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  constructor(private router:Router,
    private productService:ProductService, private store: Store<{ productList: Product[]}>) {}

  products: Product[];
  perPage = 10;
  currentPage = 1;
  pagesToShow = 5;

  ngOnInit() {
    this.store.pipe(select(selectCoffeeStatus))
    .subscribe(
      data => (
        this.products = data
      ));
  }
  next() {
    this.currentPage++;
  }

  prev() {
    if (this.currentPage === 1) return;
    this.currentPage--;
  }

  goToPage(loc: number): void {
    this.currentPage = loc;
  }

}
