const router = require('express').Router();
const apiRoutes = require('./api');
const aboutRoutes = require('./about-routes');
const catsRoutes = require('./cats-routes');
const contactRoutes = require('./contact-routes');
const loginRoutes = require('./login-routes');
const rabbitsRoutes = require('./rabbits-routes');

// Prefix all routes defined in the api directory with `/api`.
router.use('/api', apiRoutes);
router.use('/about', aboutRoutes);
router.use('/cats', catsRoutes);
router.use('/contact', contactRoutes);
router.use('/login', loginRoutes);
router.use('/rabbits', rabbitsRoutes);

// Prefix all routes defined in the api directory with `/api`.
router.use("/api", apiRoutes);

// Prefix all routes defined in the api directory with `/pages`.
// router.use("/pages", pagesRoutes);

router.use((req, res) => {
  res.send("<h1> Ooops 🐾 </h1>")
});

module.exports = router;
