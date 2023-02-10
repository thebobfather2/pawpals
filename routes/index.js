const router = require('express').Router();
const apiRoutes = require('./api');

// Prefix all routes defined in the api directory with `/api`.
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1> Ooops 🐾 </h1>")
});

module.exports = router;