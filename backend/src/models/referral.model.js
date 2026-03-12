const mongoose = require("mongoose");

const ReferralSchema = new mongoose.Schema({
    yourName: {
        type: String,
        required: true
    },
    yourEmail: {
        type: String,
        required: true
    },
    yourPhone: String,

    practiceName: {
        type: String,
        required: true
    },
    contactPersonName: {
        type: String,
        required: true
    },
    practiceEmail: {
        type: String,
        required: true
    },
    practicePhone: String,

    notes: String,

    createdAt: {
        type: Date,
        default: Date.now
    }
});

const referralPointSchema = new mongoose.Schema(
{
  title: String
},
{ _id: false }
);

const referralSectionSchema = new mongoose.Schema(
{
  title: String,
  description: String,
  points: [referralPointSchema]
},
{ _id: false }
);

const ReferralPageSchema = new mongoose.Schema({
  heroBanner: {
    title: { type: String, required: true },
    subtitle: String,
    backgroundImage: String
  },

  sections: [referralSectionSchema]
});

const ReferralForm = mongoose.model("Referral", ReferralSchema);
const ReferralPage = mongoose.model("ReferralPage", ReferralPageSchema);

module.exports = { ReferralForm, ReferralPage };