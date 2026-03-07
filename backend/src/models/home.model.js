const mongoose = require("mongoose"); 

const heroBannerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    primaryButton: {
      text: String,
      link: String,
    },

    secondaryButton: {
      text: String,
      link: String,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("HeroBanner", heroBannerSchema);