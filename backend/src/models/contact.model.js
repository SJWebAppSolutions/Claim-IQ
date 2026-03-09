const mongoose = require("mongoose");

const ContactMessageSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  message: {
    type: String,
    required: true
  }
},
{
  timestamps: true
});


const ContactInfoSchema = new mongoose.Schema(
{
  icon: String,
  title: String,
  description: String
},
{ _id: false }
);

const ContactPageSchema = new mongoose.Schema({
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
    description: String
  },
  contactItems: [ContactInfoSchema]
});

const ContactMessage = mongoose.model("ContactMessage", ContactMessageSchema);
const ContactPage = mongoose.model("ContactPage", ContactPageSchema);

module.exports = {
  ContactMessage,
  ContactPage
};