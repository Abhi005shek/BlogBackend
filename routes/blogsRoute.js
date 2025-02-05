import { Router } from "express";
import {
  createBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
  getBlogById,
} from "../controller/blogController.js";

const router = Router();

// post api to create blog
router.post("/create", createBlog);

// get api to get blogs
router.get("/get", getBlogs);
router.get("/:id", getBlogById);
// put api for update and delete api for deletion of blog
router.route("/:id").put(updateBlog).delete(deleteBlog);

export default router;