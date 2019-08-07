import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProductsService } from "../products.service";
import { Subscription, interval, Observable } from "rxjs";

@Component({
  selector: "app-product-add",
  templateUrl: "./product-add.component.html",
  styleUrls: ["./product-add.component.css"]
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
  private firstSubscription: Subscription;
  ngOnInit() {
    
    // creating a custom observable
    const customObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        // to throw an error an error params is called
        if (count >= 3) observer.error(new Error("count is 3"));
        count++;
      }, 1000);
    });
    customObservable.subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error.message);
      }
    );
  }
  addProduct() {
    this.productService.addProduct(
      this.productNameRef.nativeElement.value,
      this.productDescriptionRef.nativeElement.value,
      this.productPriceRef.nativeElement.value
    );
  }
}
