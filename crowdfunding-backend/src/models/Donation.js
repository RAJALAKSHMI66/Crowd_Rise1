import mongoose from 'mongoose';

const donationSchema = mongoose.Schema(
    {
        amount: { type: Number, required: true },
        donor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        campaign: { type: mongoose.Schema.Types.ObjectId, ref: 'Campaign', required: true },
    },
    { timestamps: true }
);

const Donation = mongoose.model('Donation', donationSchema);
export default Donation;
