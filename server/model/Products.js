const mongoose = require("mongoose");
const { Schema } = mongoose;
const productSchema = new Schema({
  productName: {
    type: String
  },
  productDescription: {
    type: String
  },
  productPrice: {
    type: Number
  }
});
const Products = mongoose.model("Product", productSchema);
module.exports = Products;
