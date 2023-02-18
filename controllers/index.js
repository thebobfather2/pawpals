const router = require('express').Router();

const apiRoutes = require('./pets-api.js');
const homeRoutes = require('./home-routes.js')

// Prefix all routes defined in the api directory with `/api`.
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;