const express = require("express");
const { getContact, sendMessage } = require("../controllers/contact.controller");

const router = express.Router();

router.get("/", getContact);

router.post("/message", sendMessage);


module.exports = router;