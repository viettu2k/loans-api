const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({
  loanName: String,
  loanType: String,
  loanIssueDate: Date,
  loanStatus: String,
});

const loanModel = mongoose.model("Loans", loanSchema);

module.exports = loanModel;
