import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(
    public auth: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    console.log(this.auth.isLoggedIn);
  }
  signIn($event: Event, username: string, password: string) {
    this.auth.error.next("");
    $event.preventDefault();

    this.auth.signIn(username, password);

    this.auth.error.subscribe(data => {
      // tslint:disable-next-line: triple-equals
      if (!data) {
        this.snackBar.open(`Welcome, ${username}`, "CLOSE", {
          duration: 2000,
          politeness: "polite",
          horizontalPosition: "left"
        });
        this.router.navigate(["home"]);
      }
      console.log(data);
    });
  }
}
