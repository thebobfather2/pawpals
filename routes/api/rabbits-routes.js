const router = require('express').Router();
const { compareSync } = require('bcrypt');
const { Pets, Users } = require('../../models');

// routes for api/pets
// get all pets module 14 activity 22
router.get('/rabbits', (req, res) => {
    Pets.findAll({
        attributes: ['petId', 'petname', 'age', 'sex', 'type', 'breed', 'description', 'imgurl']
    }).then(dbPetData => res.json(dbPetData))
        .catch(err => {
            console.log(err);
            res.status(404).json(err);
        })
});

// get a single pet
router.get('/:petId', (req, res) => {
    Pets.findOne({
        where: {
            petId: req.params.petId
        },
        attributes: ['petId', 'petname', 'age', 'sex', 'type', 'breed', 'description', 'imgurl']
    }).then(dbPetData => {
        if (!dbPetData) {
            res.status(404).json({ message: 'No pet with this id found' });
            return;
        }
        res.json(dbPetData);
    })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// route to create a pet
router.post('/rabbits', (req, res) => {
    Pets.create({
        petname: req.body.petname,
        age: req.body.age,
        sex: req.body.sex,
        type: req.body.type,
        breed: req.body.breed,
        description: req.body.description
    })
        .then(dbPetData => res.json(dbPetData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})


// Update pet info
router.put('/:petId', (req, res) => {
    Pets.update(
        {
            petname: req.body.petname,
            age: req.body.age,
            sex: req.body.sex,
            type: req.body.type,
            breed: req.body.breed,
            description: req.body.description
        },
        {
            where: {
                petId: req.params.petId
            }
        }
    )
        .then(dbPetData => {
            if (!dbPetData) {
                res.status(404).json({ message: 'No pet with this id found' });
                return;
            }
            res.json(dbPetData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

module.exports = router;