const UserController = require('../controller/UserController');

module.exports = app => {
    app.get('/user/get/', UserController.get);
    app.post('/user/post', UserController.post);
    app.put('/user/put/', UserController.put);
    app.delete('/user/delete/', UserController.delete);
    app.get('/user/me/', UserController.token);
}