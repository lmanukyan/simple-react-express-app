const { Router } = require("express");
const router = Router();

const web = require("./web");
const api = require("./api");

router.use("/api", api);
router.use("/", web);

module.exports = router;