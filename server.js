// Packages / Dependencies.
const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection.js"); // Imports sequelize connection.

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware.
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Recognizes the incoming Request Object as a JSON Object.

// Turn on routes.
app.use(routes);

// Default response for any other request (Not Found).
app.use((req, res) => {
  res.status(404).end();
});

// Syncs sequelize models to the database, then starts the Express.js server.
sequelize.sync({ force: false }).then(() => {
  // Force false so data doesn't get dropped on every sync.
  app.listen(PORT, () => console.log(`Now listening on Port ${PORT}`));
});