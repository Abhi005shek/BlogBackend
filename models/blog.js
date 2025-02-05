import mongoose from "mongoose";

// Blogs schema
const schema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    content: {type: String},
    createdAt: {type: Date, default: Date.now()}
});

// Blogs model
export const Blog = mongoose.model('Blog',schema);