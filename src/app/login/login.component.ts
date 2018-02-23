import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Code, grpc} from "grpc-web-client";
import {AccountRequest, LoginResponse, RegisterResponse} from "../../generated/matomat_pb";
import {Account, Products} from "../../generated/matomat_pb_service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username = "";
  public password = "";

  constructor(
    private router: Router
  ) { }

  public login(): void {
    console.log("Login with: ", this.username, " ", this.password);

    // TODO Quick and dirty...
    const accountRequest = new AccountRequest();
    accountRequest.setUsername(this.username);
    accountRequest.setPassword(this.password);

    grpc.unary(Account.Login, {
      debug: true,
      request: accountRequest,
      // @Chris: Hier kann man etz relative Pfade nutzen
      host: '/api',
      onEnd: (res) => {
        const { status, statusMessage, headers, message, trailers } = res;

        // TODO: in result objekt schieben
        const msg: LoginResponse = <LoginResponse>message;

        if (status === Code.OK && message) {
          console.log('Response:', msg.getStatus(), msg.getUser());
        } else {
          console.log('Fehler', statusMessage);
        }
      }
    });


    // this.router.navigate(['/drinks']);
  }

  public register(): void {
    console.log("Would love to register with: ", this.username, " ", this.password);

    // TODO Quick and dirty...
    const accountRequest = new AccountRequest();
    accountRequest.setUsername(this.username);
    accountRequest.setPassword(this.password);

    grpc.unary(Account.Register, {
      debug: true,
      request: accountRequest,
      // @Chris: Hier kann man etz relative Pfade nutzen
      host: '/api',
      onEnd: (res) => {
        const { status, statusMessage, headers, message, trailers } = res;

        // TODO: in result objekt schieben
        const msg: RegisterResponse = <RegisterResponse>message;

        if (status === Code.OK && message) {
          console.log('Response:', msg.getStatus());
        } else {
          console.log('Fehler', statusMessage);
        }
      }
    });
  }

  ngOnInit() {
    // if logged in -> this.router.navigate(['/drinks']);
  }

}
