import { Component, OnInit } from '@angular/core';

import { Product } from '../../generated/matomat_pb';
import { PayConfirmDialogComponent } from '../pay-confirm-dialog/pay-confirm-dialog.component';
import { MatDialog } from '@angular/material';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
  products: Product[] = [];

  constructor(public dialog: MatDialog, private productService: ProductService) { }

  ngOnInit() {
    return this.loadProducts();
  }

  loadProducts(): Promise<Product[]> {
    return this.productService.getProducts()
      .then(products => this.products = products);
  }

  public pay(product: Product): void {
    const dialogRef = this.dialog.open(PayConfirmDialogComponent, {
      width: '350px',
      data: { product: product }
    });

    dialogRef.afterClosed().subscribe(hasBezahlt => {
      console.log('Bezahlen bestätigt: ', hasBezahlt);
    });
  }

}

