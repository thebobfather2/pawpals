const router = require('express').Router();
const petsRoutes = require('./pets');
const usersRoutes = require('./users');

// Prefix all routes.
router.use('/palplace', petsRoutes); // defined in `pets.js` with `/palplace
router.use('/users', usersRoutes); // defined in `users.js` with `/login

module.exports = router