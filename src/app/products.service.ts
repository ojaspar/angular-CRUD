import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  uri = "http://localhost:5000";
  constructor(private http: HttpClient) {}
  addProduct(
    productName: string,
    productDescription: string,
    productPrice: number
  ) {
    const obj = {
      productName,
      productDescription,
      productPrice
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj).subscribe(res => console.log(res));
  }
  getProducts() {
    return this.http.get(`${this.uri}/products`);
  }
  editProduct(id) {
    return this.http.get(`${this.uri}/edit/${id}`);
  }
  updateProduct(
    productName: string,
    productDescription: string,
    productPrice: number,
    id: any
  ) {
    const obj = {
      productName,
      productDescription,
      productPrice
    };
    this.http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log("Done" + res));
  }
  deleteProduct(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}
