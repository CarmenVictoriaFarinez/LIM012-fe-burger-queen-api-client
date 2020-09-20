import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// components
import { LoginComponent } from './components/user/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { CreateUpdateDeleteComponent } from './components/admin/create-update-delete/create-update-delete.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AuthGuardsService } from './Guards/auth-guards.service';
import { ProductsComponent } from './components/admin/products/products.component';
import { UsersComponent } from './components/admin/users/users.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent },
  {path: 'orders', component: OrdersComponent, canActivate: [AuthGuardsService] },
  {path: 'products', component: ProductsComponent },
  {path: 'users', component: UsersComponent },
  {path: 'user', component: CreateUpdateDeleteComponent },
  {path: '**', component: Page404Component, canActivate: [AuthGuardsService] }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class RouterRoutingModule { }
