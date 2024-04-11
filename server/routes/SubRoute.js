import express from "express"
import { addSubscription, deleteSubscription } from "../controllers/SubscriptionController.js";

const subRouter = express.Router();

subRouter.post('/create-sub',addSubscription);
subRouter.delete('/delete-sub',deleteSubscription);

export default subRouter;