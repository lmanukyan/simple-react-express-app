const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');
const authController = require('../controllers/AuthController');
const userController = require('../controllers/UserController');

const loginValidation = require('../validation/login')
const registrationValidation = require('../validation/registration')



router.post(
  '/register', 
  registrationValidation, 
  authController.register
)

router.post(
  '/login',
  loginValidation,
  authController.login
)

router.post(
  '/logout',
  authController.logout
)

router.get(
  '/users/me',
  authMiddleware,
  userController.getMe
)

router.put(
  '/users/update',
  authMiddleware,
  userController.update
)

module.exports = router