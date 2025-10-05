const BlogSchema = require("../models/BlogSchema");

exports.postCreateBlog = async (req, res) => {
  try {
    const { media, mediaType, title, description } = req.body;

    if (!media || !mediaType || !title || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const blog = new BlogSchema({
      media,
      mediaType,
      title,
      description,
    });

    const savedBlog = await blog.save();

    res.status(201).json({
      message: "Blog created successfully",
      blog: savedBlog,
    });
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogSchema.find().sort({ createdAt: -1 });

    res.status(200).json({
      message: "All blogs fetched successfully",
      total: blogs.length,
      blogs,
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ message: "Server error" });
  }
};
