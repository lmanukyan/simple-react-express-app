const { Router } = require('express')
const router = Router()
const authController = require('../controllers/AuthController')

router.get('/', (req, res) => {
  res.send('Birds home page')
})

router.post('/register', authController.register)

module.exports = router