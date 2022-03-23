const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
  name: String,
  timeToComplete: Number,
  directions: String,
});

module.exports = mongoose.model("Recipe", recipeSchema);
