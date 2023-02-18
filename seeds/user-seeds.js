const { User } = require('../models'); // Imports the models.

const userData = [
  {
    "firstname": "Larissa",
    "lastname": "Guilherme",
    "email": "larigens@gmail.com",
    "password": "12345lg"
  },
  {
    "firstname": "Isaiah",
    "lastname": "Arnold",
    "email": "iarnold@gmail.com",
    "password": "12345ia"
  },
  {
    "firstname": "Zanza",
    "lastname": "Meow",
    "email": "meowzanza@aol.com",
    "password": "meow123"
  },
  {
    "firstname": "Piper",
    "lastname": "No",
    "email": "piperno@msn.com",
    "password": "isaidno123"
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
