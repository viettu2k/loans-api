const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  emailAddress: String,
  phoneNumber: String,
  dob: Date,
});

const customerModel = mongoose.model("Customer", customerSchema);

module.exports = customerModel;
