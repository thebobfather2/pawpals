const router = require('express').Router();
const petsRoutes = require('./pets');
const loginRoutes = require('./login-routes');
const sequelize = require("../../config/connection");

// Prefix all routes.
router.use('/palplace', petsRoutes); // defined in `pets.js` with `/palplace
router.use('/login-routes', loginRoutes); // defined in `login-routes.js` with `/login

module.exports = router