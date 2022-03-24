const mongoose = require("mongoose");

const subscriberSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  zipCode: {
    type: Number,
    min: [10000, "Zip code too short"],
    max: 99999,
  },
  vip: {
    type: Boolean,
    required: true,
  },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

subscriberSchema.methods.getInfo = function () {
  return `Name: ${this.name} Email: ${this.email} Zip Code:
  ${this.zipCode} VIP: ${this.vip}`;
};

subscriberSchema.methods.findLocalSubscribers = function () {
  return this.model("Subscriber").find({ zipCode: this.zipCode }).exec();
};

mongoose.Schema.Types.Boolean.convertToTrue.add("on");
mongoose.Schema.Types.Boolean.convertToFalse.add("off");

module.exports = mongoose.model("Subscriber", subscriberSchema);
