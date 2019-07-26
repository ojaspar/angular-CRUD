// const express = require("express");
// const path = require("path");
// // const bodyParser = require("body-parser");
// const app = express();
// const cors = require("cors");
// const mongoose = require("mongoose");
// const port = process.env.PORT || 3000;
// const config = require("./DB");
// const products = require("./routes/product.routes");

// mongoose.Promise = global.Promise;
// mongoose.connect(config.DB, { useNewUrlParser: true }).then(
//   () => {
//     console.log("Database is connected");
//   },
//   err => {
//     console.log("Can not connect to the database" + err);
//   }
// );
// app.use(cors());
// // app.use(bodyParser.json());
// app.use(express.json());
// app.use(products);

// app.listen(() => {
//   console.log("listening on port " + port);
// });

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const product = require("./routes/product.routes");

const config = require("./DB");
const app = express();

const port = process.env.PORT || 5000;
mongoose.Promise = global.Promise;
mongoose
  .connect(config.DB, { useNewUrlParser: true, useFindAndModify: false })
  .then(
    () => {
      console.log("Database is connected");
    },
    err => {
      console.log("Can not connect to the database" + err);
    }
  );
app.use(cors());
app.use(express.json());
app.use(product);

app.listen(port, () => {
  console.log("listening on port " + port);
});
