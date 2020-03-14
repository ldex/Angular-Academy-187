import { Component, OnInit } from '@angular/core';
import { Product } from '../product.interface';
import { ProductService } from '../product.service';
import { Observable, EMPTY } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { fadeInAnimation } from './../../../app/animations';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  // make the animation available to this component
  animations: [fadeInAnimation],
  // attach the animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': ''}
})
export class ProductListComponent implements OnInit {

  title = 'Products';
  // products: Product[];
  products$: Observable<Product[]>;
  productsNb = 0;
  selectedProduct: Product;
  errorMessage: string;

  // Pagination
  pageSize = 5;
  start = 0;
  end = this.pageSize;
  currentPage = 1;

  previousPage() {
    this.start -= this.pageSize;
    this.end -= this.pageSize;
    this.currentPage--;
    this.selectedProduct = null;
  }
  nextPage() {
    this.start += this.pageSize;
    this.end += this.pageSize;
    this.currentPage++;
    this.selectedProduct = null;
  }

  onSelect(product: Product) {
    this.selectedProduct = product;
    this.router.navigateByUrl('/products/'+product.id);
  }

  constructor(
    private productService: ProductService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.products$ = this
      .productService
      .products$
      .pipe(
        tap(products => this.productsNb = products.length),
        catchError(
          error => {
            this.errorMessage = error.message;
            return EMPTY;
          }
        )
      );

    // this
    //   .productService
    //   .products$
    //   .subscribe(
    //     results => this.products = results,
    //     error => console.log(error)
    //   );
  }

}
