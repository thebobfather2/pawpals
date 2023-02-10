const { Pets } = require('../models'); // Imports the models.

const petData = [
  {
    pet_name: 'Bella',
    breed: 'German Shepherd',
    gender: 'Female',
    age: 5,
    color: 'Brown and Black',
    size: 'Large',
    weight: 70,
    isSpayedNeutered: true,
    species_id: 1,
  },
  {
    pet_name: 'Charlie',
    breed: 'English Bullanimal',
    gender: 'Male',
    age: 9,
    color: 'Brown and White',
    size: 'Medium',
    weight: 50,
    isSpayedNeutered: false,
    species_id: 1,
  },
  {
    pet_name: 'Max',
    breed: 'Chihuahua',
    gender: 'Male',
    age: 2,
    color: 'Brown',
    size: 'Small',
    weight: 5,
    isSpayedNeutered: true,
    species_id: 1,
  },
  {
    pet_name: 'Luna',
    breed: 'Poodle',
    gender: 'Female',
    age: 9,
    color: 'White',
    size: 'Medium',
    weight: 47,
    isSpayedNeutered: false,
    species_id: 1,
  },
  {
    pet_name: 'Bailey',
    breed: 'Beagle',
    gender: 'Female',
    age: 3,
    color: 'White, Brown and Black',
    size: 'Medium',
    weight: 20,
    isSpayedNeutered: true,
    species_id: 1,
  },
  {
    pet_name: 'Milo',
    breed: 'Siamese',
    gender: 'Male',
    age: 6,
    color: 'White and Black',
    size: "Small",
    weight: 10,
    isSpayedNeutered: true,
    species_id: 2,
  },
];

const seedPets = () => Pets.bulkCreate(petData);

module.exports = seedPets;