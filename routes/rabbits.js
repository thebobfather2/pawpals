const router = require('express').Router();
const sequelize = require("../../config/connection");
const { Pets } = require('../models');

// get all of the pets
router.get('/rabbits', (req, res) => {
    console.log(req.session);
    Pets.findAll({
        attributes: ['petId', 'petname', 'age', 'sex', 'type', 'breed', 'description', 'imgurl']
    })
        .then(dbPetData => {
            const pets = dbPetData.map(pets => pets.get({ plain: true }));
            res.render('pets', {
                pets,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// show one pet
router.get('/:petId', (req, res) => {
    Pets.findOne({
        attributes: ['petId', 'petname', 'age', 'sex', 'type', 'breed', 'description', 'imgurl'],
        where: {
            petId: req.params.petId
        }
    })
        .then(dbPetData => {
            if (!dbPetData) {
                res.status(404).json({ message: 'No pet found with this id :(' });
                return;
            }
            const pet = dbPetData.get({ plain: true });
            res.render('single-pet', { pet, loggedIn: req.session.loggedIn })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

module.exports = router;