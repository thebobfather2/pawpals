const seedSpecies = require('./species-seeds');
const seedPets = require('./pets-seeds');
const seedUsers = require('./users-seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedSpecies();
    console.log('\n----- SPECIES SEEDED -----\n');
    await seedPets();
    console.log('\n----- PETS SEEDED -----\n');
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
    
    process.exit(0);
};

seedAll();