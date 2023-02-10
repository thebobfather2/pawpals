//============== Import Methods ==============//
const Pets = require('./Pets');
const Species = require("./Species");
// const Users = require('./Users');

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

//likes - many to many relationship between users and pets
// Users.belongsToMany(Pets, {
//     through: Likes,
//     as: 'liked_pets',
//     foreignKey: 'uid',
// });

// Pets.belongsToMany(Users, {
//     through: Likes,
//     as: 'liked_pets',
//     foreignKey: 'pid'
// });

// Users.hasMany(Likes, {
//     foreignKey: 'uid'
// });

// Pets.hasMany(Likes, {
//     foreignKey: 'pid'
// });

// Likes.belongsTo(Pets, {
//     foreignKey: 'pid'
// });

// Likes.belongsTo(Users, {
//     foreignKey: 'uid',

// });

module.exports = {
    Pets,
    Species,
}