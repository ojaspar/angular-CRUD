export class Product {
  productName: string;
  productDescription: string;
  productPrice: Number;
  constructor(
    productName: string,
    productDescription: string,
    productPrice: number
  ) {
    this.productName = productName;
    this.productDescription = productDescription;
    this.productPrice = productPrice;
  }
}
