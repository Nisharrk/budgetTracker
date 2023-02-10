const mongoose = require("mongoose");

const { Schema } = mongoose;

const budgetSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    type: {
      type: String,
      required: true,
      enum: ["expense", "income"],
    },
    notes: String,
  },
  {
    timestamps: true, // this creates createdAt and updatedAt properties
  }
);

const budget = mongoose.model("Budget", budgetSchema);

module.exports = budget;
