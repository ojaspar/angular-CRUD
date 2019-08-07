import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginObj: any = {};
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  loginForm: FormGroup;
  createForm() {
    this.loginForm = this.fb.group({});
  }
  ngOnInit() {}
  login(form: NgForm) {
    this.loginObj = { ...form.value };
    console.log(this.loginObj);
  }
}
