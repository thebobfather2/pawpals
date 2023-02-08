const { Likes } = require('../models');

const likesdata = [
    {
        // lid: 101,
        uid: 10230,
        pid: 500130
    },
    {
        uid: 10230,
        pid: 500131
    },
    {
        uid: 10230,
        pid: 500132
    },
    {
        uid: 10231,
        pid: 500130
    },
    {
        uid: 10231,
        pid: 500133
    },
    {
        uid: 10232,
        pid: 500130
    },
    {
        uid: 10232,
        pid: 500134
    },
    {
        uid: 10233,
        pid: 500132
    },
    {
        uid: 10233,
        pid: 500134
    },
    {
        uid: 10234,
        pid: 500131
    }
];

const seedLikes = () => Likes.bulkCreate(likesdata);
module.exports = seedLikes;
module.exports = seedLikes;