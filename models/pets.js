// Imports important parts of Sequelize library.
const { Model, DataTypes } = require('sequelize');
// Imports the database connection.
const sequelize = require("../config/connection");

// Initialize Pets model (table) by extending off Sequelize's Model class.
class Pets extends Model { }

Pets.init(
    // Set up fields and rules for Pets model.
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        pet_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        size: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        isSpayedNeutered: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        species_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "species",
                key: "id",
            }
        }
    },
    {
        sequelize, // Links to database connection.
        timestamps: false, // Set to false to remove `created_at` and `updated_at` fields.
        freezeTableName: true, // Prevents sequelize from renaming the table.
        underscored: true, // Makes all variables that have 2 names to be separated by an underscore.
        modelName: "pets",
    }
);

module.exports = Pets;
