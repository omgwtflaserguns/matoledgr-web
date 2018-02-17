import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username = "";
  public password = "";

  constructor() { }

  public login(): void {
    console.log("Would love to login with: ", this.username, " ", this.password);
  }

  public register(): void {
    console.log("Would love to register with: ", this.username, " ", this.password);
  }

  ngOnInit() {
  }

}
