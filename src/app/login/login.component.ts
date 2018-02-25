import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AccountService} from "../services/account.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username = "";
  public password = "";

  constructor(private router: Router,
              private accountService: AccountService) {
  }

  public login(): Promise<boolean | void> {
    return this.accountService.login(this.username, this.password)
      .then(() => this.router.navigate(['/drinks']))
      .catch(() => alert("login fehlgeschlagen"));
  }

  public register(): void {
    this.accountService.register(this.username, this.password)
      .then(() => this.router.navigate(['/drinks']))
      .catch(() => alert("register fehlgeschlagen"));
  }

  ngOnInit() {
    return this.accountService.isLoggedIn()
      .then(() => this.router.navigate(['/drinks']))
      .catch(() => {
      });
  }

}
