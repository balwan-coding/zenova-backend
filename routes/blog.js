const express = require("express");
const { postCreateBlog, getAllBlogs } = require("../controller/blog");
const blogrouter = express.Router();

blogrouter.post("/create", postCreateBlog);
blogrouter.get("/allBlogs", getAllBlogs);

module.exports = blogrouter;
