const router = require('express').Router();
const aboutRoutes = require('./about-routes');
const catsRoutes = require('./cats-routes');
const dogsRoutes = require('./dogs-routes');
const rabbitsRoutes = require('./rabbits-routes');
const contactRoutes = require('./contact-routes');
const loginRoutes = require('./login-routes');


// Prefix all routes.
router.use('/about-routes', aboutRoutes); // defined in `about-routes.js` with `/about
router.use('/cats-routes', catsRoutes); // defined in `cats-routes.js` with `/cats
router.use('/dogs-routes', dogsRoutes); // defined in `dogs-routes.js` with `/dogs
router.use('/rabbits-routes', rabbitsRoutes); // defined in `rabbits-routes.js` with `/rabbits
router.use('/contact-routes', contactRoutes); // defined in `contact-routes.js` with `/contact
router.use('/login-routes', loginRoutes); // defined in `login-routes.js` with `/login

module.exports = router;