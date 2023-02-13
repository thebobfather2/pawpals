// Packages / Dependencies.
const express = require("express");
const routes = require("./routes");
const path = require('path');
const sequelize = require("./config/connection"); // Imports sequelize connection.
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const PORT = process.env.PORT || 3001;
const app = express();

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Express middleware.
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Recognizes the incoming Request Object as a JSON Object.
// Makes the public folder available to the client.
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/animals-routes'));

// Turn on routes.
app.use(routes);

// // GET Route for about page.
app.get('/about', (req, res) => {
  // Logs the request to the terminal.
  console.info(`${req.method} request received for ${req.path}`);
  res.sendFile(path.join(__dirname, '/public/pages/about.html'));
})

// GET Route for cats place page.
app.get('/cats', (req, res) => {
  // Logs the request to the terminal.
  console.info(`${req.method} request received for ${req.path}`);
  res.sendFile(path.join(__dirname, '/public/pages/cats.html'));
})
// GET Route for dogs place page.
app.get('/dogs', (req, res) => {
  // Logs the request to the terminal.
  console.info(`${req.method} request received for ${req.path}`);
  res.sendFile(path.join(__dirname, '/public/pages/dogs.html'));
})
// GET Route for rabbits place page.
app.get('/rabbits', (req, res) => {
  // Logs the request to the terminal.
  console.info(`${req.method} request received for ${req.path}`);
  res.sendFile(path.join(__dirname, '/public/pages/rabbits.html'));
})

// // GET Route for contact page.
app.get('/contact', (req, res) => {
  // Logs the request to the terminal.
  console.info(`${req.method} request received for ${req.path}`);
  res.sendFile(path.join(__dirname, '/public/pages/contact.html'));
})

// GET Route for login page.
app.get('/login', (req, res) => {
  // Logs the request to the terminal.
  console.info(`${req.method} request received for ${req.path}`);
  res.sendFile(path.join(__dirname, '/public/pages/login.html'));
})

// GET Route for homepage / Fallback route.
app.get('*', (req, res) => {
  // Logs the request to the terminal.
  console.info(`${req.method} request received for ${req.path}`);
  res.sendFile(path.join(__dirname, '/public/index.html'));
})

// Default response for any other request (Not Found).
app.use((req, res) => {
  res.status(404).end();
});

// Syncs sequelize models to the database, then starts the Express.js server.
sequelize.sync({ force: false }).then(() => {
  // Force false so data doesn't get dropped on every sync.
  app.listen(PORT, () => console.log(`Now listening on Port ${PORT} 🐾`));
});