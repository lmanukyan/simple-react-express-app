const { check, body } = require('express-validator');
const validationHandler = require('./handler')


const updateUserValidation = validationHandler([
    body('name')
        .not().isEmpty()
        .withMessage('The name field cannot be empty.'),
    check('avatar')
        .custom(
            ({ req }) => ['image/jpeg', 'image/jpg', 'image/png'].includes(req.files.avatar.mimetype)
        )
        .withMessage('The avatar must be a file of type: jpeg, png, jpg.'),
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long.'),
])
    

module.exports = updateUserValidation;