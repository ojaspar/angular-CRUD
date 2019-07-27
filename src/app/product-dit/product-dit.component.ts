import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductsService } from "../products.service";

@Component({
  selector: "app-product-dit",
  templateUrl: "./product-dit.component.html",
  styleUrls: ["./product-dit.component.css"],
  providers: [ProductsService]
})
export class ProductDitComponent implements OnInit {
  angForm: FormGroup;
  product: any = {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ps: ProductsService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      productName: ["", Validators.required],
      productDescription: ["", Validators.required],
      productPrice: ["", Validators.required]
    });
  }

  ngOnInit() {
    // console.log(this.route);
    // console.log(this.route.snapshot.params.id); to get the params of a route automatically
    this.route.params.subscribe(params => {
      this.ps.editProduct(params["id"]).subscribe(res => (this.product = res));
    });
  }
  editProduct() {}
  updateProduct(
    productName: string,
    productDescription: string,
    productPrice: number
  ) {
    this.route.params.subscribe(params => {
      console.log(params.id);
      this.ps.updateProduct(
        productName,
        productDescription,
        productPrice,
        params.id
      );
      this.router.navigate(["products"]);
    });
  }
}
