const authMiddleware = function (req, res, next) {
    if(req.session.user){
        return next();
    }
    res.status(401).send({
        success: false,
        data: "Unauthorized"
    })
}

module.exports = authMiddleware;