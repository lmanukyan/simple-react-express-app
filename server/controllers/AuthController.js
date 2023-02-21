const userModel = require('../models/UserModel');
const userResponse = require('../helpers/userResponse');
const { passwordHash, passwordCompare } = require('../helpers/bcrypt');
const { getUploadFileData } = require('../helpers/upload');


class AuthController {

    async register (req, res) {
        const { avatarUrl, avatarPath } = getUploadFileData(req.files.avatar);

        try {
            await req.files.avatar.mv(avatarPath);
            const user = await userModel.create({
                ...req.body,
                password: await passwordHash(req.body.password),
                avatar: avatarUrl
            })
            res.status(201).json({ success: true })
        } catch (e) {
            res.status(400).json({ success: false, data: e })
        }
    }

    async login (req, res) {
        const user = await userModel.findOne({
            email: req.body.email
        });

        if (! user) {
            return res.status(404).json({ 
                success: false,
                data: "User not found."
            });
        }

        const passwordCheck = await passwordCompare(req.body.password, user.password);

        if (! passwordCheck) {
            return res.status(400).json({ 
                success: false,
                data: "Wrong email or password."
            });
        }

        req.session.user = userResponse(user);
    
        res.status(200).json({ success: true, user: req.session.user })
    }

    async logout (req, res) {
        req.session.user = null;
        res.status(200).json({ success: true })
    }
    
}

module.exports = new AuthController();