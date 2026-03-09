const mongoose = require("mongoose");

const infoCardSchema = new mongoose.Schema(
{
  icon: String,
  title: String,
  description: String
},
{ _id: false }
);

const aboutSchema = new mongoose.Schema(
{
  heroBanner: {
    title: {
      type: String,
      required: true
    },
    subtitle: String,
    backgroundImage: String
  },

  story: {
    heading: String,
    description: String,
    image: String
  },

  infoCards: [infoCardSchema]
},
{ timestamps: true }
);

const About = mongoose.model("About", aboutSchema);

module.exports = About;