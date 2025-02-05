import { Blog } from "../models/blog.js";

export const createBlog = async (req, res) => {
  const { title, description, content } = req.body;

  try {
    await Blog.create({ title, description, content });

    res.status(201).json({
      success: true,
      message: "Blog Created Successfully!!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error occured while creating Blog",
      error: error,
    });
  }
};

export const getBlogs = async (req, res) => {
  const blogs = await Blog.find();

  res.status(200).json({
    success: true,
    data: blogs || [],
  });
};

export const updateBlog = async (req, res) => {
  try {
    const { title, description, content } = req.body;

    console.log("Body: ", req.body);

    const updatedBlog = await Blog.findByIdAndUpdate(
        req.params.id,
        { title, description, content },
        { new: true } // This option returns the updated document
      );
  
      console.log("Updated Blog: ", updatedBlog);
  
      if (!updatedBlog) {
        return res.status(404).json({
          success: false,
          message: "Blog not found",
        });
      }

    res.status(200).json({
      success: true,
      message: "Blog Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error occured while updating Blog",
      error: error,
    });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog)
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });

    await blog.deleteOne();

    res.status(200).json({
      success: true,
      message: "Blog Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error occured while deleting Blog",
      error: error,
    });
  }
};
