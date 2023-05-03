import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeeReducer } from 'src/store/reducers/app.reducer';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeEffects } from 'src/store/effects/app.effect';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule } from './pagination/pagination.module';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path:'products',component:ProductListComponent},
  {path: 'products/:id',component:ProductDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PaginationModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ coffee : CoffeeReducer } as ActionReducerMap<any,any>),
    EffectsModule.forRoot([CoffeeEffects]),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
