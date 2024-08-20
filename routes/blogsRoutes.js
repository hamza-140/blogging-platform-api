const { Router } = require("express");
const { body } = require("express-validator");
const blogsController = require("../controllers/blogsController");
const router = Router();

router.get("/posts", blogsController.allBlog);
router.get("/posts/:id", blogsController.getBlog);
router.delete("/posts/:id", blogsController.deleteBlog);
router.put(
  "/posts/:id",
  [
    body("title", "Title cannot be null").exists(),
    body("content", "Content cannot be null").exists(),
    body("category", "Category cannot be null").exists(),
    body("tags", "Tags cannot be null").exists(),
  ],
  blogsController.updateBlog
);
router.post(
  "/posts",
  [
    body("title", "Title cannot be null").exists(),
    body("content", "Content cannot be null").exists(),
    body("category", "Category cannot be null").exists(),
    body("tags", "Tags cannot be null").exists(),
  ],
  blogsController.createBlog
);

module.exports = router;
