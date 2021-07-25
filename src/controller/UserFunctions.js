const User = require('../model/User');
const jwt = require('jsonwebtoken');

exports.createUser = (req, res) => {
    User.create({
       first_name: req.body.first_name,
       surname: req.body.surname,
       nickname: req.body.nickname,
       pass: req.body.pass,
       email: req.body.email,
       street: req.body.street,
       st_number: req.body.st_number,
       district: req.body.district,
       state: req.body.state,
       city: req.body.city,
       phone: req.body.phone,
       question1: req.body.question1,
       question2: req.body.question2
    })
    .then( value => {
        const token = _createToken(value);
        return res.json(token);
    })
    .catch(value => res.sendStatus(400));
}

exports.getUser = (req, res) => {
    const [hashType, hash] = req.headers.authorization.split(' ');
    const [nickname, pass] = Buffer.from(hash,'base64').toString().split(':');
  
    User.findOne({
        where: {
            nickname: nickname,
            pass: pass
            }
        })
    .then(value => {
        const token = _createToken(value);
        res.json(token);
        })
    .catch(value => {
        res.sendStatus(404);
    });
}

exports.deleteUser = (req, res) => {
    const [ hashType, token ] = req.headers.authorization.split(' ');

    try{
        const payload = jwt.verify(token, process.env.SECRET);

        User.destroy({
            where: {
                id_user: payload.id
            }})
        .then( value => res.sendStatus(200))
        .then( value => res.sendStatus(404));
    }catch(error){
        console.log(error);
        res.sendStatus(401);
    }
  
}

exports.authToken = (req, res, next) => {
    _decodeToken(req, res)
}

exports.editPass = (req, res) => {
    const [ hashType, token ] = req.headers.authorization.split(' ');
    const newPass = req.body.pass;

    try{
        const payload = jwt.verify(token, process.env.SECRET);
        
        User.update({
            pass: newPass
        },{
            where: {
                id_user: payload.id
            }
        })
        .then( value => {
            const newToken = _createToken(value);
            res.json({value, newToken});
        })
        .catch( value => res.sendStatus(404));
    }catch(error){
        console.log(error);
        res.sendStatus(401);
    }
}

function _createToken(value){
    const id = value.id_user;
    return jwt.sign({id},process.env.SECRET,{
        expiresIn: 86400
    });
}

function _decodeToken(req, res){
    const [hashType, token] = req.headers.authorization.split(' ');

    try{
        const payload = jwt.verify(token, process.env.SECRET);

        User.findOne({
            where:{id_user: payload.id}
        })
        .then(value => {
            if(!value) return res.sendStatus(404);

            res.sendStatus(202)
        })
        .catch(value => res.sendStatus(404))
    }catch(error){
        console.log(error);
        res.sendStatus(401)
    }
}