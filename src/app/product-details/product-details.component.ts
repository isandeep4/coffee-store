import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/store/app.interface';
import { selectCoffeeStatus } from 'src/store/selectors/app.selector';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product = {};
  id = '';
  constructor(private route: ActivatedRoute, private store: Store<{ productList: Product[]}>) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.store.select(selectCoffeeStatus)
      .subscribe((data) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].id === +this.id) {
            this.product = data[i];
            break;
          }
        }
      });
  }

}
