const mongoose = require("mongoose");

const contactModel  = (data = {}) => {
  return {
    firstName: String(data.firstName || '').trim(),
    lastName: String(data.lastName || '').trim(),
    email: String(data.email || '').trim().toLowerCase(),
    telephone: String(data.telephone || '').trim(),
    message: String(data.message || '').trim(),
    createdAt: new Date(),
  };
}


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

const ContactPage = mongoose.model("ContactPage", ContactPageSchema);

module.exports = {
  contactModel,
  ContactPage
};