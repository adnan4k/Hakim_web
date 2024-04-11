import express from "express"
import { allUser, createUser, deleteUser, login, signup, updateUser } from "../controllers/UserController.js";

const userRouter = express.Router();

userRouter.post('/login',login);
userRouter.post('/signup',signup);
userRouter.post('/create-user',createUser);
userRouter.delete('/delete-user/:id',deleteUser);
userRouter.put('/update-user',updateUser);
userRouter.get('/get-user',allUser)


export default userRouter