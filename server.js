// Packages / Dependencies.
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');

const sequelize = require('./config/connection'); // Imports sequelize connection.
// Create a new sequelize store using the express-session package
// const SequelizeStore = require('')(session.Store);

const PORT = process.env.PORT || 3001;
const app = express();

const hbs = exphbs.create({});

// Set Handlebars as the default template engine.
const sess = {
  secret: 'I have a secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  // store: new SequelizeStore({
  //   db: sequelize
  // })
}

app.use(session(sess))

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Express middleware.
app.use(express.json()); // Recognizes the incoming Request Object as a JSON Object.
app.use(express.urlencoded({ extended: true }));
// Makes the public folder available to the client.
app.use(express.static(path.join(__dirname, 'public')));

// Turn on routes.
app.use(routes);

// Syncs sequelize models to the database, then starts the Express.js server.
sequelize.sync({ force: false }).then(() => {
  // Force false so data doesn't get dropped on every sync.
  app.listen(PORT, () => console.log(`Now listening on Port ${PORT} 🐾`));
});