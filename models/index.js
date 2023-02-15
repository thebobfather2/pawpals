//============== Import Methods ==============//
const Pets = require('./Pets');
const Species = require("./Species");
const Users = require("./Users");
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
    Users,
}