;
import { addPost, allPost, deletePost, latestPost, updatePost } from "../controllers/PostController.js";
import express from "express"

const postRouter = express.Router();

postRouter.post('/create-post',addPost);
postRouter.put('/update-post/:id',updatePost),
postRouter.delete('/delete-post/:id',deletePost),
postRouter.get('/get-post',allPost);
postRouter.get('/latest-post',latestPost);

export default postRouter