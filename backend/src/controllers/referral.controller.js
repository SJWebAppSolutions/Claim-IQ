const { ReferralForm, ReferralPage } = require("../models/contact");


exports.getReferral = async (req, res) => {
    try {

        res.setHeader(
            "Cache-Control",
            "public, s-maxage=3600, stale-while-revalidate=86400"
        );

        const referral = await ReferralPage.findOne();

        if (!referral) {
            return res.status(404).json({
                message: "referral contact not found"
            });
        }

        return res.status(200).json({
            success: true,
            data: referral
        });

    } catch (error) {
        console.error("Get Referral Error:", error);
        res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};


exports.sendReferralMessage = async (req, res) => {
  try {

    const {
      yourName,
      yourEmail,
      yourPhone,
      practiceName,
      contactPersonName,
      practiceEmail,
      practicePhone,
      notes
    } = req.body;

    if (!yourName || !yourEmail || !practiceName || !contactPersonName || !practiceEmail) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing"
      });
    }

    const referral = await ReferralForm.create({
      yourName,
      yourEmail,
      yourPhone,
      practiceName,
      contactPersonName,
      practiceEmail,
      practicePhone,
      notes
    });

    res.status(201).json({
      success: true,
      message: "Referral submitted successfully",
      data: referral
    });

  } catch (error) {
    console.error("Send Referral Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};