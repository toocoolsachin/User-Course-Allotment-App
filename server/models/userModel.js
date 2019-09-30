const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  collegeName: String,
  graduationYear: String
});

const User = mongoose.model('User', userSchema);
module.exports = User;
