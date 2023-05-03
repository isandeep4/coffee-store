import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICOffeeState } from "../app.interface";


export const selectCoffee = createFeatureSelector<ICOffeeState>('coffee');

export const selectCoffeeStatus = createSelector(
    selectCoffee,
    (state: ICOffeeState) => state.productList
);