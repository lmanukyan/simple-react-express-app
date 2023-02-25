const testUser = {
    "id": "63f60d19154bb794de9bf506",
    "name": "www",
    "birthdate": "2023-02-01T00:00:00.000Z",
    "avatar": "/uploads/f5181c1b35c8890d5d24fedaa4f1e558.jpeg"
};

const authMiddleware = function (req, res, next) {
    //req.session.user = testUser;
    
    if(req.session.user){
        return next();
    }

    res.status(401).send({
        success: false,
        data: [
            { msg: 'Unauthorized' }
        ]
    });
}

module.exports = authMiddleware;