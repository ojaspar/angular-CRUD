import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Injectable({
  providedIn: "root"
})
export class SingupService {
  uri = "http://localhost:5000";
  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}
  signUp(
    fullName: string,
    email: string,
    password: string,
    confirmPassword: string
  ) {
    const obj = {
      fullName,
      email,
      password,
      confirmPassword
    };
    console.log(obj);
    this.http.post(`${this.uri}/signup`, obj).subscribe(res => {
      if (res) {
        this.authService.login();
      } else {
        this.authService.logout();
      }
    });
  }
}
