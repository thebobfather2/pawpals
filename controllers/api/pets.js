const router = require("express").Router();
const Pets = require("../../models/pets"); // Imports the models.

// The `/api/Pets` endpoint.

// Get all dogs and changes the anonymous callback function to become Asynchronous with with try/catch for errors.
// along with HTTP status codes.
router.get("/dogs", async (req, res) => {
    try {
        // Store the dogsData in a variable once the promise is resolved.
        const dogsData = await Pets.findAll({
            where: {
                species_id: 1
            },
        });
        if (!dogsData) {
            res.status(404).json({ message: "No dogs were found!" });
            return;
        } else {
            res.status(200).json(dogsData);
        }
    } catch (err) {
        // 500 status code means internal server error.
        res.status(500).json(err);
    }
});

// Get all cats and changes the anonymous callback function to become Asynchronous with with try/catch for errors.
// along with HTTP status codes.
router.get("/cats", async (req, res) => {
    try {
        // Store the dogsData in a variable once the promise is resolved.
        const catsData = await Pets.findAll({
            where: {
                species_id: 2
            },
        });
        if (!catsData) {
            res.status(404).json({ message: "No cats were found!" });
            return;
        } else {
            res.status(200).json(catsData);
        }
    } catch (err) {
        // 500 status code means internal server error.
        res.status(500).json(err);
    }
});

// Get all rabbits and changes the anonymous callback function to become Asynchronous with with try/catch for errors.
// along with HTTP status codes.
router.get("/rabbits", async (req, res) => {
    try {
        // Store the dogsData in a variable once the promise is resolved.
        const rabbitsData = await Pets.findAll({
            where: {
                species_id: 3
            },
        });
        if (!rabbitsData) {
            res.status(404).json({ message: "No rabbits were found!" });
            return;
        } else {
            res.status(200).json(rabbitsData);
        }
    } catch (err) {
        // 500 status code means internal server error.
        res.status(500).json(err);
    }
});

module.exports = router;
