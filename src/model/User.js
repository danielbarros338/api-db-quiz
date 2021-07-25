const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/databaseConfig');

class User extends Model{}

User.init({
    id_user: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nickname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pass: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false
    },
    st_number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    district: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.INTEGER
    },
    question1: {
        type: DataTypes.TEXT
    },
    question2: {
        type: DataTypes.TEXT
    }
},{
    sequelize,
    modelName: 'User',
    tableName: 'Users'
})

console.log(User === sequelize.model('User'));

module.exports = User;