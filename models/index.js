//============== Import Methods ==============//
const Animals = require("./Animals");
const Species = require("./Species");
const Users = require('./Users');
const Pets = require('./Pets');
const Likes = require('./Likes');

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

//============================= Anastasia  =============================//

//likes - many to many relationship between users and pets
Users.belongsToMany(Pets, {
    through: Likes,
    as: 'liked_pets',
    foreignKey: 'uid',
});

Pets.belongsToMany(Users, {
    through: Likes,
    as: 'liked_pets',
    foreignKey: 'pid'
});

Users.hasMany(Likes, {
    foreignKey: 'uid'
});

Pets.hasMany(Likes, {
    foreignKey: 'pid'
});

Likes.belongsTo(Pets, {
    foreignKey: 'pid'
});

Likes.belongsTo(Users, {
    foreignKey: 'uid',

});

module.exports = {
    Users, Pets, Likes, Animals,
    Species,
};