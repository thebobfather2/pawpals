const router = require('express').Router();
const apiRoutes = require('./api');
// const pagesRoutes = require('./pages');

// Prefix all routes defined in the api directory with `/api`.
router.use("/api", apiRoutes);

// Prefix all routes defined in the api directory with `/pages`.
// router.use("/pages", pagesRoutes);

router.use((req, res) => {
  res.send("<h1> Ooops 🐾 </h1>")
});

module.exports = router;