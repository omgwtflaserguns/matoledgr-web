import { Component } from '@angular/core';
import {HelloRequest, HelloReply} from "../generated/matoledgr_pb";
import {Greeter} from "../generated/matoledgr_pb_service";
import {grpc, Code, Metadata} from "grpc-web-client"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'matoledgr';
  greeting = 'not yet greeted';

  public greet() {
    console.log("started greeting");

    let helloRequest = new HelloRequest();
    helloRequest.setName("angular");

    /*
    grpc.invoke(Greeter.SayHello, {
      debug: true,
      request: helloRequest,
      host: "http://localhost:8080",
      onHeaders: (headers: Metadata) => {
        console.log("got headers: ", headers);
      },
      onMessage: (message: HelloReply) => {
        console.log("got reply: ", message.toObject());
        this.greeting = message.getMessage();
      },
      onEnd: (code: Code, msg: string | undefined, trailers: Metadata) => {
        if (code == Code.OK) {
          console.log("all ok");
        } else {
          console.log("hit an error", code, msg, trailers);
        }
      }
    });
    */

    grpc.unary(Greeter.SayHello, {
      debug: true,
      request: helloRequest,
      host: "http://localhost:8080",
      onEnd: (res) => {
          const { status, statusMessage, headers, message, trailers } = res;

          // TODO: in result objekt schieben
          const msg: HelloReply = <HelloReply>message;

          if (status === Code.OK && message) {
            console.log("OK")
            this.greeting = msg.getMessage();
          }
          else {
            console.log("Fehler", statusMessage);
          }
      }
    });


  }
}
