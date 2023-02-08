//============== Import Methods ==============//
const Animals = require("./Animals");
const Species = require("./Species");

//============================= Association Methods =============================//

// Animals belongsTo Species.
Animals.belongsTo(Species, {
    foreignKey: "species_id",
});

// Species have many Animals.
Species.hasMany(Animals, {
    foreignKey: "species_id",
    // When we delete a Specie, make sure to also delete the associated Animals.
    onDelete: "CASCADE",
});

module.exports = {
    Animals,
    Species,
};