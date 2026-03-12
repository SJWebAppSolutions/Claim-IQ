const express = require("express");
const { getReferral, sendReferralMessage } = require("../controllers/referral.controller");

const router = express.Router();

router.get("/", getReferral);

router.post("/message", sendReferralMessage);


module.exports = router;