import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductAddComponent } from "./product-add/product-add.component";
import { ProductGetComponent } from "./product-get/product-get.component";
import { ProductDitComponent } from "./product-dit/product-dit.component";
import { NavComponent } from "./nav/nav.component";
import { SlimLoadingBarModule } from "ng2-slim-loading-bar";

import { ProductsService } from "./products.service";

import { NotFoundComponent } from "./not-found/not-found.component";
import { AuthGuardService } from "./auth-guard.service";
import { AuthService } from "./auth.service";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductGetComponent,
    ProductDitComponent,
    NavComponent,
    NotFoundComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ProductsService, AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
