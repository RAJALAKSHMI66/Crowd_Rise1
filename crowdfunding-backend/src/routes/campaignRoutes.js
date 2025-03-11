import express from "express";
import { createCampaign, getCampaigns } from "../controllers/campaignController.js";
import authMiddleware from "../middleware/authMiddleware.js"; // Import middleware

const router = express.Router();

router.post("/create", authMiddleware, createCampaign); // Protected
router.get("/all", getCampaigns); // Public

export default router;
