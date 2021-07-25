const sequelize = require('./src/config/databaseConfig');
const express = require('./src/config/expressConfig');
const jwt = require('./src/config/jwtConfig')
const nameApp = process.env.npm_package_name;

const teste = require('./src/config/databaseConfig');
teste.authenticate()

express.listen(process.env.PORT || 8080)