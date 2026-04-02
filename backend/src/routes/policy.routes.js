const express = require("express");
const { getPolicy } = require("../controllers/policy.controller");

const router = express.Router();

router.get("/", getPolicy);

module.exports = router;