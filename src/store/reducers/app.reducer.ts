import { createReducer, on, Action } from '@ngrx/store';
import { ICOffeeState, Product } from '../app.interface';
import { didCoffeeItemsLoaded } from '../actions/app.action';



export const initialState: ICOffeeState = {
    productList: [],
    apiSuccess: false,
  };

export const _coffeeReducer = createReducer(
    initialState,
    on(didCoffeeItemsLoaded, (state, action) => ({
      ...state,
      productList: action.statusResponse,
      apiSuccess: action.apiSuccess,
    }))
)

export const CoffeeReducer = (
    state: ICOffeeState,
    action: Action,
) => {
    return _coffeeReducer(state, action);
}

export const selectItems = (state: ICOffeeState) => state.productList;