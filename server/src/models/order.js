const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
  user: {
    type: Object,
    ref: "User", // Reference to the User model
    required: true,
  },
  products: [
    {
      product: {
        type: Object,
        ref: "Product", // Reference to the Product model
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  shippingAddress: {
    type: String,
    required: true,
  },
  orderStatus: {
    type: String,
    enum: ["Pending", "Delivered"],
    default: "Pending",
  },
  timestamps: {
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
