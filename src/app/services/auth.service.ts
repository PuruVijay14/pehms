import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  get isLoggedIn() {
    return !!localStorage.getItem("username");
  }

  constructor() {}
  signIn(username, password) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  }
  signOut() {
    localStorage.clear();
  }
}
