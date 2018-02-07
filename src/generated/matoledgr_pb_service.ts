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
