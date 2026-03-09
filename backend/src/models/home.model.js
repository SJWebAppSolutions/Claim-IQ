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
  },

  heroImage: String
},
{ timestamps: true }
);

const twoColumnGridSchema = new mongoose.Schema(
{
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  insuranceItems: [
    {
      image: String,
      title: String,
      description: String
    }
  ]
},
{ timestamps: true }
);

const howItWorksSchema = new mongoose.Schema(
{
  title: {
    type: String,
    required: true
  },

  description: String,

  steps: [
    {
      stepNumber: Number,
      title: String,
      description: String
    }
  ]
},
{ timestamps: true }
);

const ctaBannerSchema = new mongoose.Schema(
{
  title: {
    type: String,
    required: true
  },

  description: String,

  button: {
    text: String,
    link: String
  }
},
{ timestamps: true }
);


const HeroBanner = mongoose.model("HeroBanner", heroBannerSchema);
const TwoColumnGrid = mongoose.model("TwoColumnGrid", twoColumnGridSchema);
const HowItWorks = mongoose.model("HowItWorks", howItWorksSchema);
const CtaBanner = mongoose.model("CtaBanner", ctaBannerSchema);

module.exports = { HeroBanner, TwoColumnGrid, HowItWorks, CtaBanner };