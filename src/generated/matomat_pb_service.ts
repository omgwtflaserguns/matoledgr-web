// package: matomat
// file: matomat.proto

import * as matomat_pb from "./matomat_pb";
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
export class Account {
  static serviceName = "matomat.Account";
}
export namespace Account {
  export class Login {
    static readonly methodName = "Login";
    static readonly service = Account;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = matomat_pb.AccountRequest;
    static readonly responseType = matomat_pb.LoginResponse;
  }
  export class Register {
    static readonly methodName = "Register";
    static readonly service = Account;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = matomat_pb.AccountRequest;
    static readonly responseType = matomat_pb.RegisterResponse;
  }
}
