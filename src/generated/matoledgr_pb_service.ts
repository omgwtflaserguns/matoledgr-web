// package: matoledgr
// file: matoledgr.proto

import * as matoledgr_pb from "./matoledgr_pb";
export class Greeter {
  static serviceName = "matoledgr.Greeter";
}
export namespace Greeter {
  export class SayHello {
    static readonly methodName = "SayHello";
    static readonly service = Greeter;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = matoledgr_pb.HelloRequest;
    static readonly responseType = matoledgr_pb.HelloReply;
  }
}
export class Products {
  static serviceName = "matoledgr.Products";
}
export namespace Products {
  export class ListProducts {
    static readonly methodName = "ListProducts";
    static readonly service = Products;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = matoledgr_pb.ProductRequest;
    static readonly responseType = matoledgr_pb.ProductList;
  }
}
export class Transaction {
  static serviceName = "matoledgr.Transaction";
}
export namespace Transaction {
  export class Buy {
    static readonly methodName = "Buy";
    static readonly service = Transaction;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = matoledgr_pb.BuyRequest;
    static readonly responseType = matoledgr_pb.BuyResponse;
  }
}
export class Account {
  static serviceName = "matoledgr.Account";
}
export namespace Account {
  export class Login {
    static readonly methodName = "Login";
    static readonly service = Account;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = matoledgr_pb.LoginRequest;
    static readonly responseType = matoledgr_pb.LoginResponse;
  }
}
