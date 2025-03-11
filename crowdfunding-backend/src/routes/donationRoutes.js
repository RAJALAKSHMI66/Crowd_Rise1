import express from "express";
import { donateToCampaign, getCampaignDonations } from "../controllers/donationController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/donate", authMiddleware, donateToCampaign); // Protected
router.get("/:campaignId", getCampaignDonations); // Public

export default router;
