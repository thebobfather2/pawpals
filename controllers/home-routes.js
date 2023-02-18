const router = require('express').Router();
const passport = require('passport');

// GET Route for home page.
router.get('/', async (req, res) => {
    try {
        // Logs the request to the terminal.
        console.info(`${req.method} request received for ${req.path}`);
        res.render('home');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET Route for about page.
router.get('/about', async (req, res) => {
    try {
        // Logs the request to the terminal.
        console.info(`${req.method} request received for ${req.path}`);
        res.render('about');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET Route for contact page.
router.get('/contact', async (req, res) => {
    try {
        // Logs the request to the terminal.
        console.info(`${req.method} request received for ${req.path}`);
        res.render('contact');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET Route for signup page.
router.get('/signup', async (req, res) => {
    try {
        // Logs the request to the terminal.
        console.info(`${req.method} request received for ${req.path}`);
        res.render('signup');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET Route for login page.
router.get('/login', async (req, res) => {
    try {
        // Logs the request to the terminal.
        console.info(`${req.method} request received for ${req.path}`);
        res.render('login');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/dashboard',
    failureRedirect: '/signup'
}
));

// GET Route for dashboard page.
router.get('/dashboard', isLoggedIn, async (req, res) => {
    try {
        // Logs the request to the terminal.
        console.info(`${req.method} request received for ${req.path}`);
        res.render('dashboard');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET Route for cats page.
router.get('/cats', isLoggedIn, async (req, res) => {
    try {
        // Logs the request to the terminal.
        console.info(`${req.method} request received for ${req.path}`);
        res.render('cats');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET Route for dogs page.
router.get('/dogs', isLoggedIn, async (req, res) => {
    try {
        // Logs the request to the terminal.
        console.info(`${req.method} request received for ${req.path}`);
        res.render('dogs');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET Route for rabbits page.
router.get('/rabbits', isLoggedIn, async (req, res) => {
    try {
        // Logs the request to the terminal.
        console.info(`${req.method} request received for ${req.path}`);
        res.render('rabbits');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET Route for logout page.
router.get('/logout', async (req, res) => {
    try {
        req.session.destroy(function (err) {
            res.redirect('/');
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/dashboard',
    failureRedirect: '/login'
}
));

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/login');
}

module.exports = router, passport;