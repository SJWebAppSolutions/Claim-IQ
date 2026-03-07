const About = require('../models/about.model');

exports.getAbout = async (req, res) => {
  try {

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400"
    );

    const about = await About.findOne().lean();

    if (!about) {
      return res.status(404).json({
        message: "About content not found"
      });
    }

    res.json(about);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};