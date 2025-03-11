import Donation from "../models/Donation.js";
import Campaign from "../models/Campaign.js";

const donateToCampaign = async (req, res) => {
  try {
    const { campaignId, amount } = req.body;
    const userId = req.user.userId; // Extract user from JWT token

    if (!campaignId || !amount) {
      return res.status(400).json({ message: "Campaign ID and amount are required." });
    }

    // Create donation
    const donation = new Donation({ campaignId, userId, amount });
    await donation.save();

    // Update campaign total received amount
    await Campaign.findByIdAndUpdate(campaignId, { $inc: { totalReceived: amount } });

    res.status(201).json({ message: "Donation successful!", donation });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const getCampaignDonations = async (req, res) => {
  try {
    const { campaignId } = req.params;
    const donations = await Donation.find({ campaignId }).populate("userId", "name email");
    res.json(donations);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export { donateToCampaign, getCampaignDonations };
