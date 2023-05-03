import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { loadCoffeeItems } from 'src/store/actions/app.action';
import { Product } from 'src/store/app.interface';
import { selectItems } from 'src/store/reducers/app.reducer';
import { selectCoffeeStatus } from 'src/store/selectors/app.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<{ items: Product[]; cart: [] }>) {
    store.pipe(select(selectCoffeeStatus))
    .subscribe(
      data => (
        this.items = data
      ));
  }

  items: Product[] = [];

  ngOnInit() {
    this.store.dispatch(loadCoffeeItems());
    
  }
}
