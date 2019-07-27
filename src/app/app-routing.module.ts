import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductAddComponent } from "./product-add/product-add.component";
import { ProductDitComponent } from "./product-dit/product-dit.component";
import { ProductGetComponent } from "./product-get/product-get.component";
import { NotFoundComponent } from "./not-found/not-found.component";

import { AuthGuardService } from "./auth-guard.service";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

const routes: Routes = [
  {
    path: "",
    component: SignupComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "product/create",
    component: ProductAddComponent
  },
  {
    path: "edit/:id",
    component: ProductDitComponent
  },
  {
    path: "products",
    canActivate: [AuthGuardService],
    component: ProductGetComponent
  },
  {
    path: "not-found",
    component: NotFoundComponent
  },
  {
    path: "**",
    redirectTo: "/not-found"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
