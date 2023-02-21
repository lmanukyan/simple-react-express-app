const fs = require('fs');
const userModel = require('../models/UserModel');
const userResponse = require('../helpers/userResponse');
const { passwordHash } = require('../helpers/bcrypt');
const { getUploadFileData, getUploadedFilePath } = require('../helpers/upload');

class UserController {

    async getMe (req, res) {
        return res.send({
            success: true, 
            data: req.session.user
        });
    }

    async update (req, res) {
        const userId = req.session.user.id;
        const user = await userModel.findById(userId);

        const userData = {
            name: req.body.name
        }

        if (req.files.avatar) {
            const { avatarUrl, avatarPath } = getUploadFileData(req.files.avatar);
            userData.avatar = avatarUrl;
            await req.files.avatar.mv(avatarPath);
            fs.unlink(getUploadedFilePath(user.avatar), (e) => console.log(e));
        }

        if (req.body.password) {
            userData.password = await passwordHash(req.body.password);
        }

        const updatedUser = await userModel.findOneAndUpdate(
            { id: userId }, 
            userData,
            { returnDocument: 'after' }
        );

        req.session.user = userResponse(updatedUser);
        
        return res.send({ success: true });
    }
    
}

module.exports = new UserController();