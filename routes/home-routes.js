const router = require('express').Router();
const { Pets, Users, Animals } = require('../models');

const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.render('homepage', {
        loggedIn: req.session.loggedIn
    });
});

// render the login template if the user is not already logged in
router.get('/login', (req, res) => {
    if (req.session.userId) {
        console.log('You are already logged in');
        res.redirect('/');
        return;
    } else {
        res.render('login', {
            loggedIn: req.session.loggedIn
        });
    }
});

router.get('/signup', (req, res) => {
    if (req.session.userId) {
        console.log('You are already logged in');
        res.redirect('/');
        return;
    } else {
        res.render('signup', {
            loggedIn: req.session.loggedIn
        });
    }
});

router.get('/about', (req, res) => {
    res.render('about', {
        loggedIn: req.session.loggedIn
    });
});

router.get('/contact', (req, res) => {
    res.render('contact', {
        loggedIn: req.session.loggedIn
    });
});

router.get('/pets', async (req, res) => {
    try {
        // Store the animals in a variable once the promise is resolved.
        const animals = await Animals.findAll();
        const normalizedData = animals.map(animal => animal.get({ plain: true }))
        if (!animals) {
            res.status(404).json({ message: "No animals were found!" });
            return;
        } else {
            res.render('pets', {
                loggedIn: req.session.loggedIn,
                animals: normalizedData
            })
        }
    } catch (err) {
        // 500 status code means internal server error.
        res.status(500).json(err);
    }
})

router.get('/pets/:speciesId', async (req, res) => {
    //build the find by species here o what you have in animal JS can go here, but the where statement is not gonna be 1, 2 ,3 it will be
    // the req.params.speciesId of cat, dog or other
    try {
        // Store the animal in a variable once the promise is resolved.
        const animalsById = await Animals.findAll({
            where: {
                species_id: req.params.speciesId
            },
        });
        const normalizedData = animalsById.map(animal => animal.get({ plain: true }))
        if (!animalsById) {
            res.status(404).json({ message: "No animals were found!" });
            return;
        } else {
            res.render('pets', {
                loggedIn: req.session.loggedIn,
                animals: normalizedData
            })
        }
    } catch (err) {
        // 500 status code means internal server error.
        res.status(500).json(err);
    }
})

module.exports = router;