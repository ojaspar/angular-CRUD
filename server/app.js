const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const product = require('./routes/product.routes');
const user = require('./routes/user.routes');

const config = require('./DB');
const app = express();

const port = process.env.PORT || 5000;
mongoose.Promise = global.Promise;
mongoose
  .connect(config.DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(
    () => {
      console.log('Database is connected');
    },
    err => {
      console.log('Can not connect to the database' + err);
    }
  );
app.use(cors());
app.use(express.json());
app.use(product);
app.use(user);

app.listen(port, () => {
  console.log('listening on port ' + port);
});
