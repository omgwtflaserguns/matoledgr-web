import { Component, OnInit } from '@angular/core';

import { Product } from '../../generated/matomat_pb';
import { PayConfirmDialogComponent } from '../pay-confirm-dialog/pay-confirm-dialog.component';
import {MatDialog, MatSnackBar} from '@angular/material';
import { ProductService } from '../services/product.service';
import {TransactionService} from "../services/transaction.service";

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
  products: Product[] = [];

  constructor(
    public dialog: MatDialog,
    private productService: ProductService,
    private transactionService: TransactionService,
    public snackBar: MatSnackBar
  ) { }

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

      if (!hasBezahlt) {
        return;
      }

      this.transactionService.buy(product.getId())
        .then(() => {
          this.snackBar.open("Kauf erfolgreich", null, { duration: 2000 });
        }).catch(() => {
          this.snackBar.open("Fehler. Bitte versuchen Sie es erneut.", null, { duration: 2000 });
        });
    });
  }

}

