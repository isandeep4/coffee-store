import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ProductService } from 'src/app/product.service';
import { didCoffeeItemsLoaded, loadCoffeeItems } from '../actions/app.action';
import { Product } from '../app.interface';


@Injectable()
export class CoffeeEffects {

  loadCoffeeItems$ = createEffect(() => 
    this.actions$.pipe(
      ofType(loadCoffeeItems),
      switchMap((action) =>{
        return this.productService.getAll()
        .pipe(
          map((products)=>{
            return didCoffeeItemsLoaded({
                statusResponse: products,
                apiSuccess: true,
            })
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
