import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SingupService } from "./singup.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
  providers: [SingupService]
})
export class SignupComponent implements OnInit {
  @ViewChild("fullName", { static: false }) fullNameRef: ElementRef;
  @ViewChild("email", { static: false }) emailRef: ElementRef;
  @ViewChild("password", { static: false }) passwordRef: ElementRef;
  @ViewChild("conPassword", { static: false }) conPasswordRef: ElementRef;
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private sU: SingupService) {
    this.createForm();
  }

  ngOnInit() {}
  createForm() {
    this.angForm = this.fb.group({
      fullName: ["", Validators.required],
      email: ["", Validators.required, Validators.email],
      password: ["", Validators.required],
      conPassword: ["", Validators.required]
    });
  }
  signUp() {
    console.log(this.angForm);
    // this.sU.signUp(this.fullNameRef.nativeElement.val);
  }
}
