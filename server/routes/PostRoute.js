;
import { addPost, allPost, deletePost, latestPost, popularPost, updatePost } from "../controllers/PostController.js";
import express from "express"

const postRouter = express.Router();

postRouter.post('/create-post',addPost);
postRouter.put('/update-post/:id',updatePost),
postRouter.delete('/delete-post/:id',deletePost),
postRouter.get('/get-post',allPost);
postRouter.get('/latest-post',latestPost);
postRouter.get('/popular-post',popularPost);

export default postRouter