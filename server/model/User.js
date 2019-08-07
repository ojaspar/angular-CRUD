const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
  fullname: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    minlength: 6
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
