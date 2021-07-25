const { Sequelize }  = require('sequelize');
                                                                       
module.exports = sequelize = new Sequelize('heroku_4df41feca0a57fe','b9efb83771cd40','93b2f75d',{
    host:'us-cdbr-east-04.cleardb.com',
    port:'3306',
    dialect: 'mysql'
});