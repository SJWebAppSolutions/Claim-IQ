const express = require("express");
const { getContact, sendMessage } = require("../controllers/contactController");

const router = express.Router();

router.get("/contact", getContact);

router.post("/contact/message", contactController.sendMessage);


module.exports = router;