const mongoose = require("mongoose");
const Schema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      default: "none",
    },
    password: {
      type: String,
      default: "none",
    },
    token: {
      type: String,
      default: "none",
    },
    todo: [
      {
        title: {
          type: String,
        },
        description: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", Schema);
module.exports = User;
