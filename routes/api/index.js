const router = require('express').Router();
const petsRoutes = require('./pets');

// Prefix all routes.
router.use('/palplace', petsRoutes); // defined in `pets.js` with `/palplace
const loginRoutes = require('./login-routes');

// Prefix all routes.
router.use('/palplace', animalsRoutes); // defined in `animal.js` with `/palplace
router.use('/login-routes', loginRoutes); // defined in `login-routes.js` with `/login

module.exports = router