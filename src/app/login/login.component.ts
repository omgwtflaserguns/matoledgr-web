import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username = "";
  public password = "";

  constructor(private router: Router,
              private userService: UserService) {
  }

  public login(): Promise<boolean | void> {
    return this.userService.login(this.username, this.password)
      .then(() => this.router.navigate(['/drinks']))
      .catch(() => alert("login fehlgeschlagen"));
  }

  public register(): void {
    this.userService.register(this.username, this.password)
      .then(() => this.router.navigate(['/drinks']))
      .catch(() => alert("register fehlgeschlagen"));
  }

  ngOnInit() {
    return this.userService.isLoggedIn()
      .then(() => this.router.navigate(['/drinks']))
      .catch(() => {
      });
  }

}
