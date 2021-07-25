const UserInterface = require('./UserFunctions');


exports.post = (req, res, next) => {
    UserInterface.createUser(req, res);
}

exports.get = (req, res, next)=>{
    UserInterface.getUser(req, res);
}

exports.put = (req, res, next) => {
    UserInterface.editPass(req, res);
}

exports.delete = (req, res, next) => {
    UserInterface.deleteUser(req, res);
}

exports.token = (req, res, next) => {
    UserInterface.authToken(req, res, next);
}
