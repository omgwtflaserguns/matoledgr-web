import { Injectable } from '@angular/core';
import { HelloRequest, HelloReply, Product, ProductList, ProductRequest } from '../../generated/matomat_pb';
import { Greeter, Products } from '../../generated/matomat_pb_service';
import { grpc, Code } from 'grpc-web-client';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProductService {

  constructor() { }

  public getProducts(): Promise<Product[]> {
    return new Promise((resolve, reject) => {
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
            resolve(msg.getProductsList());
          } else {
            console.log('Fehler', statusMessage);
            reject(statusMessage);
          }
        }
      });
    });

  }
}
