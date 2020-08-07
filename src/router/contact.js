const express = require("express");
const router = express.Router();

const contactController = require("../controllers/contactController");

// router.get("/page", contactController.getContactByNum);
// router.get("/num", contactController.getContactData);
router.get("/name", contactController.getContactData);
router.get("/page", contactController.getContactData);

module.exports = router;
