const router = require('express').Router();
const animalsRoutes = require('./animal');

// Prefix all routes.
router.use('/palplace', animalsRoutes); // defined in `animal.js` with `/palplace


module.exports = router;