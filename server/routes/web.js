const express = require('express');
const router = express.Router();

router.use('/', express.static('../app/build'))

module.exports = router