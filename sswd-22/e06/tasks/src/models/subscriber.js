const mongoose = require("mongoose");

const subscriberSchema = mongoose.Schema({
  name: String,
  email: String,
  zipCode: Number,
  vip: Boolean,
});

mongoose.Schema.Types.Boolean.convertToTrue.add("on");
mongoose.Schema.Types.Boolean.convertToFalse.add("off");

module.exports = mongoose.model("Subscriber", subscriberSchema);
