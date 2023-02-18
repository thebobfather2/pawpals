const Sequelize = require("sequelize");
require("dotenv").config();

// Create a connection object
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
      multipleStatements: true,
      dialectOptions: {
        decimalNumbers: true,
      },
    }
  );

module.exports = sequelize;