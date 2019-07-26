import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../products.service";
import { Product } from "../Products.model";

@Component({
  selector: "app-product-get",
  templateUrl: "./product-get.component.html",
  styleUrls: ["./product-get.component.css"]
})
export class ProductGetComponent implements OnInit {
  products: Product[];

  constructor(private ps: ProductsService) {}

  ngOnInit() {
    this.ps.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }
  deleteProduct(id) {
    this.ps.deleteProduct(id).subscribe(res => {
      this.products.splice(id, 1);
    });
  }
}
