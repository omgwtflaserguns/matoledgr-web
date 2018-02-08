import { Component } from '@angular/core';
import {HelloRequest, HelloReply, Product, ProductList, ProductRequest} from '../generated/matoledgr_pb';
import {Greeter, Products} from '../generated/matoledgr_pb_service';
import {grpc, Code} from 'grpc-web-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'matoledgr';
  greeting = 'not yet greeted';
  products: Product[] = [];

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
          console.log('OK')
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
            console.log('OK')
            this.greeting = msg.getMessage();
          } else {
            console.log('Fehler', statusMessage);
          }
      }
    });
  }
}
