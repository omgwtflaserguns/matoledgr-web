import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from "../services/account.service";
import { RegisterStatus } from "../../generated/matomat_pb";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username = "";
  public password = "";

  constructor(private router: Router,
    private accountService: AccountService,
    public snackBar: MatSnackBar) {
  }

  public login(): Promise<boolean | void> {
    return this.accountService.login(this.username, this.password)
      .then(() => this.router.navigate(['/drinks']))
      .catch(() => alert("login fehlgeschlagen"));
  }

  public register(): Promise<any> {
    return this.accountService.register(this.username, this.password)
      .then((registerStatus) => {
        switch (registerStatus) {
          case RegisterStatus.REGISTER_OK:
            return this.router.navigate(['/drinks']);
          case RegisterStatus.REGISTER_FAILED_NAME_ALREADY_IN_USE:
            this.snackBar.open("Dieser Nutzer existiert bereits.", null, { duration: 2000 });
            break;
          case RegisterStatus.REGISTER_FAILED_PASSWORD_INVALID:
            this.snackBar.open("Das Passwort ist ungültig", null, { duration: 2000 });
            break;
          default:
          this.snackBar.open("Das Registrieren ist fehlgeschlagen, warum auch immer ...", null, { duration: 2000 });
        }
      })
      .catch(() => this.snackBar.open("Das Registrieren ist mächtig fehlgeschlagen, warum auch immer ...", null, { duration: 2000 }));
  }

  ngOnInit() {
    // return this.accountService.isLoggedIn()
    //   .then(() => this.router.navigate(['/drinks']))
    //   .catch(() => {
    //   });
  }

}
