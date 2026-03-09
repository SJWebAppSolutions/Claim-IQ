const express = require("express");
const { getReferral, sendReferralMessage } = require("../controllers/contactController");

const router = express.Router();

router.get("/referral", getReferral);

router.post("/referral/message", sendReferralMessage.sendMessage);


module.exports = router;