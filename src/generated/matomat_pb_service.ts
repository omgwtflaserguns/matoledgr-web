// package: matomat
// file: matomat.proto

import * as matomat_pb from "./matomat_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
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
export class Transactions {
  static serviceName = "matomat.Transactions";
}
export namespace Transactions {
  export class ListTransactions {
    static readonly methodName = "ListTransactions";
    static readonly service = Transactions;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = matomat_pb.TransactionsRequest;
    static readonly responseType = matomat_pb.TransactionList;
  }
  export class Buy {
    static readonly methodName = "Buy";
    static readonly service = Transactions;
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
  export class Register {
    static readonly methodName = "Register";
    static readonly service = Account;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = matomat_pb.AccountRequest;
    static readonly responseType = matomat_pb.RegisterResponse;
  }
  export class Login {
    static readonly methodName = "Login";
    static readonly service = Account;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = matomat_pb.AccountRequest;
    static readonly responseType = matomat_pb.LoginResponse;
  }
  export class GetAccount {
    static readonly methodName = "GetAccount";
    static readonly service = Account;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = matomat_pb.GetAccountRequest;
    static readonly responseType = matomat_pb.GetAccountResponse;
  }
}
