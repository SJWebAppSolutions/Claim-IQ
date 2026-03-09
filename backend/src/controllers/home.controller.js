const { HeroBanner, TwoColumnGrid, HowItWorks, CtaBanner } = require("../models/home.model");

const cacheHeader = "public, s-maxage=3600, stale-while-revalidate=86400";

const getSingleDocument = (Model, notFoundMessage) => async (req, res) => {
  try {
    res.setHeader("Cache-Control", cacheHeader);

    const data = await Model.findOne().lean();

    if (!data) {
      return res.status(404).json({
        success: false,
        message: notFoundMessage,
      });
    }

    return res.status(200).json({
      success: true,
      data,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

exports.getHeroBanner = getSingleDocument(
  HeroBanner,
  "Hero banner not found"
);

exports.getTwoColumnGrid = getSingleDocument(
  TwoColumnGrid,
  "Two Column Grid Data not found"
);

exports.getHowItWorks = getSingleDocument(
  HowItWorks,
  "How It Works Data not found"
);

exports.getCtaBanner = getSingleDocument(
  CtaBanner,
  "CTA Banner Data not found"
);