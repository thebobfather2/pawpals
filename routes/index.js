const router = require('express').Router();
const apiRoutes = require('./api');
// const aboutRoutes = require('./about-routes');
// const contactRoutes = require('./contact-routes');

// Prefix all routes defined in the api directory with `/api`.
router.use('/api', apiRoutes);
// router.use('/about', aboutRoutes);
// router.use('/contact', contactRoutes);

router.use((req, res) => {
  res.send("<h1> Ooops 🐾 </h1>")
});

module.exports = router;
