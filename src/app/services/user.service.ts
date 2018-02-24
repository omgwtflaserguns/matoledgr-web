import {Injectable} from '@angular/core';
import {grpc, Code} from 'grpc-web-client';
import {AccountRequest, LoginResponse, LoginStatus, RegisterResponse, RegisterStatus} from "../../generated/matomat_pb";
import {Account} from "../../generated/matomat_pb_service";

@Injectable()
export class UserService {

  constructor() {
  }

  public isLoggedIn(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const accountRequest = new AccountRequest();

      // TODO klären wie wir prüfen wollen ob ein user eingelogged ist
      // aktuell wäre es zum beispiel möglich einfach einen call an die productlist auszuführen und zu gucken ob s klappt
      // extra service isLoggedIn der prüft ob eine sitzung vorhanden ist?
      // oder einfach ohne userdaten gegen den service login gehen?
      grpc.unary(Account.Login, {
        debug: true,
        request: accountRequest,
        host: '/api',
        onEnd: (res) => {
          const {status, statusMessage, message} = res;
          const msg: LoginResponse = <LoginResponse>message;
          if (status === Code.OK
            && msg.getStatus() === LoginStatus.LOGIN_OK) {
            resolve();
          } else {
            reject(statusMessage);
          }
        }
      });
    });
  }

  public login(username: string, password: string): Promise<LoginStatus> {
    return new Promise((resolve, reject) => {

      const accountRequest = new AccountRequest();
      accountRequest.setUsername(username);
      accountRequest.setPassword(password);

      grpc.unary(Account.Login, {
        debug: true,
        request: accountRequest,
        host: '/api',
        onEnd: (res) => {
          const {status, statusMessage, message} = res;
          const msg: LoginResponse = <LoginResponse>message;

          if (status === Code.OK && message) {
            console.log('Response:', msg.getStatus(), msg.getUser());
            resolve(msg.getStatus());

          } else {
            console.log('Fehler', statusMessage);
            reject(statusMessage);
          }
        }
      });
    });
  }

  public register(username: string, password: string): Promise<RegisterStatus> {
    return new Promise((resolve, reject) => {

      const accountRequest = new AccountRequest();
      accountRequest.setUsername(username);
      accountRequest.setPassword(password);

      grpc.unary(Account.Register, {
        debug: true,
        request: accountRequest,
        host: '/api',
        onEnd: (res) => {
          const {status, statusMessage, message} = res;
          const msg: RegisterResponse = <RegisterResponse>message;

          if (status === Code.OK && message) {
            resolve(msg.getStatus());
          } else {
            reject(statusMessage);
          }
        }
      });
    });
  }
}
