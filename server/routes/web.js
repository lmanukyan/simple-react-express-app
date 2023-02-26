const express = require("express");
const router = express.Router();

router.use("/uploads", express.static("uploads"));
router.use("/static", express.static("../app/build/static"));
router.use("*", express.static("../app/build"));

module.exports = router;
