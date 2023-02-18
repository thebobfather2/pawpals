//============== Import Methods ==============//
const Pets = require('./pets');
const Species = require("./species");
const User = require("./user");
//============================= Association Methods =============================//

// Pets belongsTo Species.
Pets.belongsTo(Species, {
    foreignKey: "species_id",
});

// Species have many Pets.
Species.hasMany(Pets, {
    foreignKey: "species_id",
    // When we delete a Specie, make sure to also delete the associated Pets.
    onDelete: "CASCADE",
});

module.exports = {
    Pets,
    Species,
    User,
}