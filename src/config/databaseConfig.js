const { Sequelize }  = require('sequelize');
                                                                       
module.exports = sequelize = new Sequelize('quiz','admin','senhadb1',{
    host:'quizdb.cikcxrvgzer3.sa-east-1.rds.amazonaws.com',
    port:'3306',
    dialect: 'mysql'
});