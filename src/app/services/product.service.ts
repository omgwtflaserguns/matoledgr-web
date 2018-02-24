import { Injectable } from '@angular/core';
import { Products } from '../../generated/matomat_pb_service';
import { grpc, Code } from 'grpc-web-client';
import {Product, ProductList, ProductRequest} from "../../generated/matomat_pb";

@Injectable()
export class ProductService {

  constructor() { }

  public getProducts(): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      const productRequest = new ProductRequest();

      grpc.unary(Products.ListProducts, {
        debug: true,
        request: productRequest,
        host: '/api',
        onEnd: (res) => {
          const { status, statusMessage, message } = res;
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
