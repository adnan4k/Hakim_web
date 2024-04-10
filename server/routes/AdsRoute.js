;
import { addAds, allAds, deleteAds, updateAds } from "../controllers/AdsController.js";
import express from "express"

const adsRouter = express.Router();

adsRouter.post('/create-ads',addAds);
adsRouter.put('/update-ads/:id',updateAds),
adsRouter.delete('/delete-ads/:id',deleteAds),
adsRouter.get('/get-ads',allAds)

export default adsRouter