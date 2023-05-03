import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, flatMap,filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from 'src/store/app.interface';
//import { Product } from './product/product.component';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}
  private url = 'https://random-data-api.com/api/coffee/random_coffee?size=50';
  getAll() {
    return this.http.get(this.url).pipe(map(res =>res))
   }
   getProductDetails(id:number):Observable<Product>{{ 
    return this.http.get<Product[]>(this.url)
    .pipe(
      flatMap(products => products),
      first(product => product.id === id)
    );
 }
}
}

