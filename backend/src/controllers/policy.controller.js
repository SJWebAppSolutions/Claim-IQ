const PrivacyPolicy = require('../models/policy.model');

exports.getPolicy = async (req, res) => {
  try {

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400"
    );

    const policy = await PrivacyPolicy.findOne().lean();

    if (!policy) {
      return res.status(404).json({
        message: "Privacy policy not found"
      });
    }

    return res.status(200).json({
      success: true,
      data: policy
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};