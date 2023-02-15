const router = require('express').Router();
const { Users } = require('../models');
const withAuth = require('../utils/auth');

// GET Route for home page.
router.get('/', async (req, res) => {
    try {
        // Logs the request to the terminal.
        console.info(`${req.method} request received for ${req.path}`);
        res.render('home', {
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/cats', async (req, res) => {
    try {
        // Logs the request to the terminal.
        console.info(`${req.method} request received for ${req.path}`);
        res.render('cats', {
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
router.get('/dogs', async (req, res) => {
    try {
        // Logs the request to the terminal.
        console.info(`${req.method} request received for ${req.path}`);
        res.render('dogs', {
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
router.get('/rabbits', async (req, res) => {
    try {
        // Logs the request to the terminal.
        console.info(`${req.method} request received for ${req.path}`);
        res.render('rabbits', {
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
// // Prevent non logged in users from viewing the cats page
// router.get('/cats', withAuth, async (req, res) => {
//     try {
//         const userData = await Users.findAll({
//             attributes: { exclude: ['password'] },
//             order: [['name', 'ASC']],
//         });

//         const users = userData.map((project) => project.get({ plain: true }));

//         res.render('cats', {
//             users,
//             loggedIn: req.session.loggedIn,
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // Prevent non logged in users from viewing the dogs page
// router.get('/dogs', withAuth, async (req, res) => {
//     try {
//         const userData = await Users.findAll({
//             attributes: { exclude: ['password'] },
//             order: [['name', 'ASC']],
//         });

//         const users = userData.map((project) => project.get({ plain: true }));

//         res.render('dogs', {
//             users,
//             loggedIn: req.session.loggedIn,
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// Prevent non logged in users from viewing the rabbits page
// router.get('/rabbits', withAuth, async (req, res) => {
//     try {
//         const userData = await Users.findAll({
//             attributes: { exclude: ['password'] },
//             order: [['name', 'ASC']],
//         });

//         const users = userData.map((project) => project.get({ plain: true }));

//         res.render('rabbits', {
//             users,
//             loggedIn: req.session.loggedIn,
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// GET Route for login page if the user is not already logged in.
router.get('/login', (req, res) => {
    // If a session exists, redirect the request to the homepage
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    } else {
        res.render('login');
    }
});

// GET Route for signup page.
router.get('/signup', async (req, res) => {
    try {
        // Logs the request to the terminal.
        console.info(`${req.method} request received for ${req.path}`);
        res.render('signup', {
            loggedIn: req.session.loggedIn
        });
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
        res.render('about', {
            loggedIn: req.session.loggedIn
        });
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
        res.render('contact', {
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;