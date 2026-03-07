const Layout = require("../models/layout.model");

exports.getLayout = async (req, res) => {
  try {

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400"
    );

    const layout = await Layout.findOne().lean();

    if (!layout) {
      return res.status(404).json({ message: "Layout not found" });
    }

    res.json(layout);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
