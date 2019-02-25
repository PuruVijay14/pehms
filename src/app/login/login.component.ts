import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit() {
    console.log(this.auth.isLoggedIn);
  }
  signIn($event: Event, username: string, password: string) {
    $event.preventDefault();
    this.auth.signIn(username, password);
    this.router.navigate(['home']);
  }
}
