const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  Phone: {
    type: Number,
  },
});

const userModel = mongoose.model("data", userSchema);
module.exports = userModel;
