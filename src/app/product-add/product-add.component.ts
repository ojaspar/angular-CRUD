import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProductsService } from "../products.service";

@Component({
  selector: "app-product-add",
  templateUrl: "./product-add.component.html",
  styleUrls: ["./product-add.component.css"],
})
export class ProductAddComponent implements OnInit {
  @ViewChild("productName", { static: false }) productNameRef: ElementRef;
  @ViewChild("productDescription", { static: false })
  productDescriptionRef: ElementRef;
  @ViewChild("productPrice", { static: false }) productPriceRef: ElementRef;
  angForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private productService: ProductsService
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

  ngOnInit() {}
  addProduct() {
    this.productService.addProduct(
      this.productNameRef.nativeElement.value,
      this.productDescriptionRef.nativeElement.value,
      this.productPriceRef.nativeElement.value
    );
  }
}
