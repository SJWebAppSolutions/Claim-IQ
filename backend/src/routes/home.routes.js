const express = require("express");
const { getHeroBanner, getTwoColumnGrid, getHowItWorks, getCtaBanner } = require("../controllers/home.controller");

const router = express.Router();

router.get("/hero-banner", getHeroBanner);
router.get("/two-column-grid", getTwoColumnGrid);
router.get("/how-it-works", getHowItWorks);
router.get("/cta-banner", getCtaBanner);



module.exports = router;