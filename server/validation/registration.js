const { check, body } = require('express-validator');
const validationHandler = require('./handler')
const userModel = require('../models/UserModel');

const registrationValidation = validationHandler([
    body('name')
        .not().isEmpty()
        .withMessage('The name field cannot be empty.'),
    body('email')
        .isEmail()
        .withMessage('Please fill a valid email address.')
        .custom(value => {
            return userModel.findOne({ email: value })
               .then(
                    () => Promise.reject('An account with this email already exists.')
                )
         }),
    body('birthdate')
        .isDate(),
    body('gender')
        .isIn(['male', 'female']),
    check('avatar')
        .custom(
            (value, { req }) => ['image/jpeg', 'image/jpg', 'image/png'].includes(req.files.avatar.mimetype)
        )
        .withMessage('The avatar must be a file of type: jpeg, png, jpg.'),
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long.'),
])
    

module.exports = registrationValidation;