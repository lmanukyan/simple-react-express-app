const express = require("express");
const router = express.Router();

router.use("/", express.static("../app/build"));
router.use("/uploads", express.static("uploads"));

module.exports = router;