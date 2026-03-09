const { ContactMessage, ContactPage } = require("../models/contact");


exports.getContact = async (req, res) => {
    try {

        res.setHeader(
            "Cache-Control",
            "public, s-maxage=3600, stale-while-revalidate=86400"
        );

        const contact = await ContactPage.findOne();

        if (!contact) {
            return res.status(404).json({
                message: "content not found"
            });
        }

        return res.status(200).json({
            success: true,
            data: contact
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};


exports.sendMessage = async (req, res) => {
  try {

    const { firstName, lastName, email, phone, message } = req.body;

    if (!firstName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "First name, email and message are required"
      });
    }

    const newMessage = await ContactMessage.create({
      firstName,
      lastName,
      email,
      phone,
      message
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: newMessage
    });

  } catch (error) {
    console.error("Send Message Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};