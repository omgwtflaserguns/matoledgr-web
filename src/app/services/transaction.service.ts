import { Injectable } from '@angular/core';
import { grpc, Code } from 'grpc-web-client';
import {Transactions} from "../../generated/matomat_pb_service";
import {BuyRequest} from "../../generated/matomat_pb";

@Injectable()
export class TransactionService {

  constructor() { }

  public buy(productId: number): Promise<void> {
    return new Promise((resolve, reject) => {
      const buyRequest = new BuyRequest();
      buyRequest.setProductid(productId);

      grpc.unary(Transactions.Buy, {
        debug: true,
        request: buyRequest,
        host: '/api',
        onEnd: (res) => {
          const { status, statusMessage, message } = res;

          if (status === Code.OK && message) {
            console.log('OK');
            resolve();
          } else {
            console.log('Fehler', statusMessage);
            reject(statusMessage);
          }
        }
      });
    });

  }
}
