const mongoose = require("mongoose");
const { Schema } = mongoose;

const Blog = new Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("blogs", Blog, "blogs");
