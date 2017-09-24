import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { RouterModule} from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ChekoutComponent } from './chekout/chekout.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './products/products.component';
import { OderSuccessComponent } from './oder-success/oder-success.component';
import { MyOdersComponent } from './my-oders/my-oders.component';
import { AdminOdersComponent } from './admin/admin-oders/admin-oders.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ChekoutComponent,
    ShoppingCartComponent,
    ProductsComponent,
    OderSuccessComponent,
    MyOdersComponent,
    AdminOdersComponent,
    LoginComponent,
    AdminProductsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'shopping-cart', component: ShoppingCartComponent},
      {path: 'chek-out', component: ChekoutComponent},
      {path: 'oder-success', component: OderSuccessComponent},
      {path: 'orders', component: MyOdersComponent},
      {path: 'login', component: LoginComponent},
      {path: 'admin/orders', component: AdminOdersComponent},
      {path: 'admin/products', component: AdminProductsComponent},
      {path: '**', component: NotFoundComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
