const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "A Product must have a name"],
    trim: true,
  },
  mrp: {
    type: Number,
    required: [true, "A Product must have a Price"],
  },
  discount: {
    type: Number,
    default: 5,
    min: 5,
    max: 80,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
    // required: [true, "A tour must have a image"],
  },
  ratingsAverage: {
    type: Number,
    min: 0,
    max: 5,
    set: (val) => Math.round(val * 10) / 10,
    default: 0,
  },
  totalRatings: {
    type: Number,
    default: 0,
  },
  description: {
    type: [String],
    required: [true, "A Product must have a Description"],
  },
  isBestSeller: {
    type: Boolean,
    default: false,
  },
  quantity: {
    type: Number,
    default: 5,
  },
});

productSchema.pre("save", function (next) {
  this.price = this.mrp - (this.mrp * this.discount) / 100;
  next();
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
