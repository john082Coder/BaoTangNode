const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FileSchema = new Schema(
  {
    image: {type: String, required: true}, // name >> string,  not null
    originalName: {type: String, required: true},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("file", FileSchema);
