import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: { type: String, required: true }, 
    description: { type: String, required: true },
    author: { type: String, required: true }
}, { versionKey: false });

const Post = mongoose.model("posts", postSchema);

export default Post;
