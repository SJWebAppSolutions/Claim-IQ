const mongoose = require("mongoose");

const pointSchema = new mongoose.Schema(
{
  label: String
},
{ _id: false }
);

const serviceItemSchema = new mongoose.Schema(
{
  title: {
    type: String,
    required: true
  },

  description: String,

  points: [pointSchema],

  image: String,

  imagePosition: {
    type: String,
    enum: ["left", "right"],
    default: "right"
  }
},
{ _id: false }
);

const serviceSchema = new mongoose.Schema(
{
  heroBanner: {
    title: String,
    subtitle: String,
    backgroundImage: String
  },

  services: [serviceItemSchema],
  
  contact: { name: String, value: String }
      
},
{ timestamps: true }
);

module.exports = mongoose.model("Service", serviceSchema);