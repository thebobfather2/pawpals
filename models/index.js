const Users = require('./Users');
const Pets = require('./Pets');
const Likes = require('./Likes');

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

module.exports = { Users, Pets, Likes };