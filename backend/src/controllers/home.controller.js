const HeroBanner = require("../models/home.model");

exports.getHeroBanner = async (req, res) => {
  try {

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400"
    );

    const banner = await HeroBanner.findOne();

    if (!banner) {
      return res.status(404).json({
        success: false,
        message: "Hero banner not found",
      });
    }

    res.json({
      success: true,
      data: banner,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};