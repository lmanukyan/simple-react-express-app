const { validationResult } = require("express-validator");

const validationHandler = (checks) => [
  ...checks,
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({
        success: false,
        data: errors.array(),
      });
    }

    next();
  },
];

module.exports = validationHandler;
