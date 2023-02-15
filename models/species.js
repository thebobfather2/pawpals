// Imports important parts of Sequelize library.
const { Model, DataTypes } = require("sequelize");
// Imports the database connection.
const sequelize = require("../config/connection");

// Initialize Species model (table) by extending off Sequelize's Model class.
class Species extends Model { }

Species.init(
    // Set up fields and rules for Species model.
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        species_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize, // Links to database connection.
        timestamps: false, // Set to false to remove `created_at` and `updated_at` fields.
        freezeTableName: true, // Prevents sequelize from renaming the table.
        underscored: true, // Makes all variables that have 2 names to be separated by an underscore.
        modelName: "species",
    }
);

module.exports = Species;
