const express = require("express");
const router = express.Router();
const Product = require("../model/Products");
router.post("/add", (req, res) => {
  let product = new Product(req.body);
  product
    .save()
    .then(product =>
      res
        .status(201)
        .json({ product: "Product has ben added successfully" + product })
    )
    .catch(err => res.status(400).send("unable to save to database"));
});

router.get("/products", (req, res) => {
  Product.find((err, products) => {
    if (err) {
      console.log(err);
    } else {
      res.json(products);
    }
  });
});

router.get("/edit/:id", (req, res) => {
  let id = req.params.id;
  Product.findById(id, (err, product) => {
    res.json(product);
  });
});

router.post("/update/:id", (req, res) => {
  Product.findById(req.params.id, function(err, product) {
    if (!product) res.status(404).send("Record not found");
    else {
      product.productName = req.body.productName;
      product.productDescription = req.body.productDescription;
      product.productPrice = req.body.productPrice;
      console.log;
      product
        .save()
        .then(product => {
          res.json("Update complete");
          console.log(product);
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

router.get("/delete/:id", (req, res) => {
  Product.findByIdAndRemove(
    { _id: req.params.id },
    
    function(err, product) {
      if (err) res.json(err);
      else res.json("Successfully removed");
    }
  );
});

module.exports = router;
