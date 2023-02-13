const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
// create user table to house user information
class Users extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.passwordHash)
    }
}

Users.init(
    {
        userId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            validate: {
                len: [5]
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        passwordHash: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        registeredAt: {
            type: DataTypes.DATE(),
            allowNull: true,

        },
        lastLogin: {
            type: DataTypes.DATE(),
            allowNull: true,
        },
        profile: {
            type: DataTypes.TEXT,
            allowNull: true,
        }
    },
    {
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.passwordHash = await bcrypt.hash(newUserData.passwordHash, 10);
                return newUserData;
            },

            async beforeUpdate(updatedUserData) {
                updatedUserData.passwordHash = await bcrypt.hash(updatedUserData.passwordHash, 10);
                return updatedUserData;
            }
        },

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        initialAutoIncrement: 10230,
        modelName: 'users'
    }
);

module.exports = Users;
