import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { Product } from 'src/store/app.interface';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectCoffeeStatus } from 'src/store/selectors/app.selector';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationModule } from '../pagination/pagination.module';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let store: MockStore;
  const coffeeTestData: Product[] = [
    {
      blend_name: "Huggy Choice",
      id: 5531,
      intensifier: "sharp",
      notes: "muted, big, marzipan, snow pea, plum",
      origin: "Orosi, Costa Rica",
      uid: "f41aeb96-0459-484f-b4ab-4624003a7a47",
      variety: "Tafari-Kela"
    }
  ] 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListComponent ],
      imports: [HttpClientModule, RouterTestingModule, NgxPaginationModule, PaginationModule],
      providers: [provideMockStore({})]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set the product list', () => {
    const dispatchSpy = spyOn(store, 'dispatch').and.callThrough();
    store.overrideSelector(selectCoffeeStatus, coffeeTestData);
    component.ngOnInit();
    expect(component.products).toBe(coffeeTestData);
  })
});
