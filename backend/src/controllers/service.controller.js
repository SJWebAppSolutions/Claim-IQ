const Service = require("../models/service.model");

exports.getService = async (req, res) => {
  try {

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400"
    );

    const service = await Service.findOne().lean();

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service content not found"
      });
    }

    return res.status(200).json({
      success: true,
      data: service
    });

  } catch (error) {
    console.error("Get Service Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};