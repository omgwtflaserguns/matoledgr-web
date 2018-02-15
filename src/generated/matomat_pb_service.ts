// package: matomat
// file: matomat.proto

import * as matomat_pb from "./matomat_pb";
export class Greeter {
  static serviceName = "matomat.Greeter";
}
export namespace Greeter {
  export class SayHello {
    static readonly methodName = "SayHello";
    static readonly service = Greeter;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = matomat_pb.HelloRequest;
    static readonly responseType = matomat_pb.HelloReply;
  }
}
export class Products {
  static serviceName = "matomat.Products";
}
export namespace Products {
  export class ListProducts {
    static readonly methodName = "ListProducts";
    static readonly service = Products;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = matomat_pb.ProductRequest;
    static readonly responseType = matomat_pb.ProductList;
  }
}
export class Transaction {
  static serviceName = "matomat.Transaction";
}
export namespace Transaction {
  export class Buy {
    static readonly methodName = "Buy";
    static readonly service = Transaction;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = matomat_pb.BuyRequest;
    static readonly responseType = matomat_pb.BuyResponse;
  }
}
export class Account {
  static serviceName = "matomat.Account";
}
export namespace Account {
  export class Login {
    static readonly methodName = "Login";
    static readonly service = Account;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = matomat_pb.LoginRequest;
    static readonly responseType = matomat_pb.LoginResponse;
  }
  export class Register {
    static readonly methodName = "Register";
    static readonly service = Account;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = matomat_pb.RegisterRequest;
    static readonly responseType = matomat_pb.RegisterResponse;
  }
}
