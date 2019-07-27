import { Injectable } from "@angular/core";
import { resolve } from "url";
import { reject } from "q";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  loggedIn = false;
  isAuthenticate() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });
    return promise;
  }

  constructor() {}
  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }
}
