const mongoose = require("mongoose");

const referralModel = (data = {}) => {
  return {
    yourName: String(data.yourName || "").trim(),
    yourEmail: String(data.yourEmail || "").trim(),
    yourPhone: String(data.yourPhone || "").trim(),
    practiceName: String(data.practiceName || "").trim(),
    contactPersonName: String(data.contactPersonName || "").trim(),
    theirEmail: String(data.theirEmail || "").trim(),
    theirPhone: String(data.theirPhone || "").trim(),
    notes: String(data.notes || "").trim(),
    createdAt: new Date(),
  };
};

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

const ReferralPage = mongoose.model("ReferralPage", ReferralPageSchema);

module.exports = { referralModel, ReferralPage };
