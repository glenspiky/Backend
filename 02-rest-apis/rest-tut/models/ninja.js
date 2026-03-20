const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//create ninja schema

const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field required"],
  },
  rank: {
    type: String,
  },
  available: {
    type: Boolean,
    default: false,
  },
  // add a geo location
});
const Ninja = mongoose.model("ninja", NinjaSchema);
module.exports=Ninja
