const userModel = require('../models/UserModel')

class AuthController {
    async register (req, res) {
        const user = await userModel.create({ name: 'Babken' })
        res.send(user)
    }
}

module.exports = new AuthController();