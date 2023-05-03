import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ProductService } from 'src/app/product.service';
import { didCoffeeItemsLoaded, loadCoffeeItems } from '../actions/app.action';
import { Product } from '../app.interface';
import { of } from 'rxjs';


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
          }),
          catchError(error=>{
            return of(didCoffeeItemsLoaded({
                statusResponse: undefined,
                apiSuccess:false
            }))
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
