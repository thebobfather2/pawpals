const { Species } = require('../models'); // Imports the models.

const speciesData = [
  {
    species_name: "Dog",
  },
  {
    species_name: "Cat",
  },
  {
    species_name: "Rabbit",
  },
];

const seedSpecies = () => Species.bulkCreate(speciesData);

module.exports = seedSpecies;