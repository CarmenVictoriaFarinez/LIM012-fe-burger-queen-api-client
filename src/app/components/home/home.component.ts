import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products/products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ProductsService],

})

export class HomeComponent implements OnInit {
  public products: any;
  public breakfast: any;
  logoPadre = 'mensaje desde el padre';
  padreNavbar = 'soy un header';
  padreDate = 'Date&HOurs';
  @Input() hijoHome: any;

  constructor(
    private productsService: ProductsService,
    private router: Router

  )
  {}

  ngOnInit(): void {

  }

getProducts(): void {
  this.productsService.getListProduct(this.products).subscribe(
    response => {
      this.products = response;
      const breakfast = this.products.filter(products => products.type === 'breakfast');
      this.products = breakfast;
      console.log(breakfast);
    }
  );
  }
  getProductsLunch(): void {
    this.productsService.getListProduct(this.products).subscribe(
      response => {
        this.products = response;
        const lunch = this.products.filter(products => products.type === 'lunch');
        this.products = lunch;
        this.router.navigate(['/lunch']);
        console.log(lunch);
      }
    );
    }
}
