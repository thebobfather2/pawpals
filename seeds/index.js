const seedSpecies = require('./species-seeds');
const seedAnimals = require('./animals-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedSpecies();
    console.log('\n----- SPECIES SEEDED -----\n');
    await seedAnimals();
    console.log('\n----- ANIMALS SEEDED -----\n');
    process.exit(0);
};

seedAll();