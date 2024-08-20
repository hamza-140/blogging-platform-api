const { validationResult } = require("express-validator");
const Blog = require("../schema/BlogSchema");

const updateBlog = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const id = req.params.id;
    const { title, content, category, tags } = req.body;
    let blogExist = await Blog.findOne({ id });

    if (blogExist) {
      const updatedBlog = await Blog.findOneAndUpdate(
        { id },
        {
          $set: {
            title,
            content,
            category,
            tags,
            updatedAt: new Date().toJSON(),
          },
        },
        { new: true }
      );

      if (updatedBlog) {
        return res.json(updatedBlog);
      } else {
        return res.status(404).json({ error: "Blog post not found" });
      }
    } else {
      return res.status(404).json({ error: "Blog post not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const id = req.params.id;
    let blogExist = await Blog.findOne({ id });

    if (blogExist) {
      await Blog.findByIdAndDelete(blogExist._id);
      res.send("Blog deleted successfully.");
    } else {
      return res.status(404).json({ error: "Blog post not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const allBlog = async (req, res) => {
  try {
    const term = req.query.term;
    if (term) {
      const blogs = await Blog.find({
        $or: [
          { title: { $regex: term, $options: "i" } },
          { content: { $regex: term, $options: "i" } },
          { category: { $regex: term, $options: "i" } },
          { tags: { $regex: term, $options: "i" } },
        ],
      });

      res.json(blogs);
    } else {
      const getBlogs = await Blog.find();
      res.json({ getBlogs });
    }
  } catch (e) {
    res.status(500).send({ e });
  }
};
const getBlog = async (req, res) => {
  try {
    const id = req.params.id;
    let blog = await Blog.findOne({ id });

    if (blog) {
      res.send(blog);
    } else {
      return res.status(404).json({ error: "Blog post not found" });
    }
  } catch (e) {
    res.status(500).send({ e });
  }
};

const createBlog = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { title, content, category, tags } = req.body;
    let id = Math.floor(Math.random() * 12345);
    let existingBlogID = await Blog.findOne({ id });
    if (existingBlogID) {
      id = Math.floor(Math.random() * 12345);
    }

    let newBlog = new Blog({
      id,
      title,
      content,
      category,
      tags,
      createdAt: new Date().toJSON(),
      updatedAt: new Date().toJSON(),
    });

    await newBlog.save();
    res.json(newBlog);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: "Some error occurred" });
  }
};

module.exports = {
  allBlog,
  createBlog,
  updateBlog,
  deleteBlog,
  getBlog,
};
