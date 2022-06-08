const mongoose = require("mongoose");

const articleShema = new mongoose.Schema({
  lp: { type: Number, required: true },
  number: {
    type: Number,
    required: true,
  },
  date: {
    type: Number,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  authors: {
    type: String,
    required: false,
  },
  notes: {
    type: String,
    required: false,
  },
});

const Article = mongoose.model("article", articleShema, "inzbud");

module.exports = Article;
