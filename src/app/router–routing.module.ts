import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// components
import { LoginComponent } from './components/user/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Page404Component } from './components/page404/page404.component';
import { RegisterComponent } from './components/user/register/register.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';
import { OrdersKitchenComponent } from './components/orders-kitchen/orders-kitchen.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'home/nav', component: NavbarComponent},
  {path: 'home/register', component: RegisterComponent },
  {path: 'home/breakfast', component: BreakfastComponent },
  {path: 'home/orders-kitchen', component: OrdersKitchenComponent },
  {path: '**', component: Page404Component },
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
