const { body } = require('express-validator');
const validationHandler = require('../validation/handler')


const loginValidation = validationHandler([
    body('email')
        .isEmail()
        .withMessage('Please fill a valid email address.'),
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long.'),
])
    

module.exports = loginValidation;