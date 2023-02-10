const router = require('express').Router();
const petsRoutes = require('./pets');
// const aboutRoutes = require('./about-routes');
// const contactRoutes = require('./contact-routes');

// Prefix all routes.
router.use('/palplace', petsRoutes); // defined in `pets.js` with `/palplace
// router.use('/about-routes', aboutRoutes); // defined in `about-routes.js` with `/about
// router.use('/contact-routes', contactRoutes); // defined in `contact-routes.js` with `/contact

module.exports = router;   