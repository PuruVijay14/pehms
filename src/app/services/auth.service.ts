import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  get isLoggedIn() {
    return !!localStorage.getItem("username");
  }

  error = new BehaviorSubject("");

  get user() {
    const username = localStorage.getItem("username");
    return this.afStore
      .collection(`users`, ref => ref.where("username", "==", username))
      .valueChanges();
  }

  constructor(private afStore: AngularFirestore) {}

  signIn(username, password) {
    // Verify the user
    const query = this.afStore
      .collection(`users`, ref =>
        ref.where("username", "==", username).where("password", "==", password)
      )
      .valueChanges();

    return query.subscribe(data => {
      if (data.length === 0) {
        this.error.next("Incorrect username / password");
      } else {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
      }
    });
  }

  signOut() {
    localStorage.clear();
  }
}
