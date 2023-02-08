const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Likes extends Model { }

Likes.init({
    lid: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        validate: {
            len: [3]
        }
    },
    uid: {
        type: DataTypes.BIGINT,
        references: {
            model: 'users',
            key: 'userId'
        }
    },
    pid: {
        type: DataTypes.BIGINT,
        references: {
            model: 'pets',
            key: 'petId'
        }
    }
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        //initialAutoIncrement=1000,
        modelName: 'likes'


    });

module.exports = Likes;