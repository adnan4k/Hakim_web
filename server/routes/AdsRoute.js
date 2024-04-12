;
import { addAds, allAds, deleteAds, latestAds, updateAds } from "../controllers/AdsController.js";
import express from "express"

const adsRouter = express.Router();

adsRouter.post('/create-ads',addAds);
adsRouter.put('/update-ads/:id',updateAds),
adsRouter.delete('/delete-ads/:id',deleteAds),
adsRouter.get('/get-ads',allAds)
adsRouter.get('/latest-ads',latestAds)

export default adsRouter