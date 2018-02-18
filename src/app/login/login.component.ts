import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    this.router.navigate(['/drinks']);
  }

  public register(): void {
    console.log("Would love to register with: ", this.username, " ", this.password);
  }

  ngOnInit() {
    // if logged in -> this.router.navigate(['/drinks']);
  }

}
