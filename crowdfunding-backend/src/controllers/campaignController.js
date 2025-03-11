import Campaign from "../models/Campaign.js";

const createCampaign = async (req, res) => {
  try {
    const { title, description, goalAmount } = req.body;
    const userId = req.user.userId; // Extract from JWT token

    const campaign = new Campaign({ title, description, goalAmount, createdBy: userId });
    await campaign.save();

    res.status(201).json({ message: "Campaign created successfully", campaign });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const getCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.json(campaigns);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export { createCampaign, getCampaigns };
