const express = require("express");
const { getHeroBanner } = require("../controllers/home.controller");

const router = express.Router();  

router.get("/hero-banner", getHeroBanner);

module.exports = router;