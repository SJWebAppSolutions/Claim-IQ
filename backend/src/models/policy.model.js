const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
  type: { type: String, required: true },
  text: String,
  items: [String]
}, { _id: false });

const sectionSchema = new mongoose.Schema({
  id: Number,
  title: { type: String, required: true },
  content: [contentSchema]
}, { _id: false });

const privacyPolicySchema = new mongoose.Schema({
  image: { type: String, default: "" },
  header: { type: String, required: true },
  description: { type: String, default: "" },
  effectiveDate: { type: Date, required: true },
  sections: { type: [sectionSchema], default: [] }
}, { timestamps: true });

module.exports = mongoose.model("PrivacyPolicy", privacyPolicySchema);