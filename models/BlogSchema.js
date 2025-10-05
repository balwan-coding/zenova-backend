// models/Blog.js
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  media: {
    type: String, // image or video URL
    required: true,
  },
  mediaType: {
    type: String,
    enum: ["image", "video"], // sirf yeh dono type allow honge
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },

  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // jis user ne like kiya
    },
  ],

  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // comment kis user ne likha
        required: true,
      },
      text: {
        type: String,
        required: true,
        trim: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],

  shareCount: {
    type: Number,
    default: 0, // jitni baar share hua
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Blog", blogSchema);
