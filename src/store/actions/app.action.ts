import { createAction, props } from '@ngrx/store';
import { Product } from '../app.interface';

export const loadCoffeeItems = createAction(
    '[Coffee API] load-Coffee-items',
  );
  
  export const didCoffeeItemsLoaded = createAction(
    '[Coffee API] Coffee-items-Retrieved',
    props<{
      statusResponse: any;
      apiSuccess: boolean;
    }>()
  )