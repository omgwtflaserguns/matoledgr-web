import { Component } from '@angular/core';
import { HelloRequest, HelloReply, Product, ProductList, ProductRequest } from '../generated/matomat_pb';
import { Greeter, Products } from '../generated/matomat_pb_service';
import { grpc, Code } from 'grpc-web-client';
import { PayConfirmDialogComponent } from './pay-confirm-dialog/pay-confirm-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'matomat';
  greeting = 'not yet greeted';
  products: Product[] = [];

  constructor(public dialog: MatDialog) {
  }

  public loadProducts() {
    console.log('started load Products');

    const productRequest = new ProductRequest();

    grpc.unary(Products.ListProducts, {
      debug: true,
      request: productRequest,
      host: 'http://localhost:8080',
      onEnd: (res) => {
        const { status, statusMessage, headers, message, trailers } = res;

        // TODO: in result objekt schieben
        const msg: ProductList = <ProductList>message;

        if (status === Code.OK && message) {
          console.log('OK');
          this.products = msg.getProductsList();
        } else {
          console.log('Fehler', statusMessage);
        }
      }
    });
  }

  public greet() {
    console.log('started greeting');

    const helloRequest = new HelloRequest();
    helloRequest.setName('angular');

    grpc.unary(Greeter.SayHello, {
      debug: true,
      request: helloRequest,
      host: 'http://localhost:8080',
      onEnd: (res) => {
        const { status, statusMessage, headers, message, trailers } = res;

        // TODO: in result objekt schieben
        const msg: HelloReply = <HelloReply>message;

        if (status === Code.OK && message) {
          console.log('OK');
          this.greeting = msg.getMessage();
        } else {
          console.log('Fehler', statusMessage);
        }
      }
    });
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
