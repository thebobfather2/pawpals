const Users  = require('../models/Users')

const usersdata = [
    {
        // userId:10230,    
        username: 'testUser01',
        email: 'testuser01@example.com',
        passwordHash: '123456789',
        registeredAt: '2021-11-18 14:00:45',
        lastLogin: '2021-11-23 15:00:45',
        profile: 'Dr. Harleen Quinzel'
    },
    {
        // userId:10231,     
        username: 'testUser02',
        email: 'testuser02@example.com',
        passwordHash: '444446789',
        registeredAt: '2021-11-20 14:00:45',
        lastLogin: '2021-11-23 15:00:45',
        profile: 'Dick Grayson'
    },
    {
        // userId:10233,    
        username: 'testUser03',
        email: 'testuser03@example.com',
        passwordHash: '123455555',
        registeredAt: '2021-11-21 14:00:45',
        lastLogin: '2021-11-23 15:00:45',
        profile: 'Oswald Chesterfield Cobblepot'
    },
    {
        //userId:10234,    
        username: 'testUser04',
        email: 'testuser04@example.com',
        passwordHash: '100001289',
        registeredAt: '2021-11-22 14:00:45',
        lastLogin: '2021-11-23 15:00:45',
        profile: 'Harvey Dent'
    },
    {
        //userId:10235,    
        username: 'testUser05',
        email: 'testuser05@example.com',
        passwordHash: '383456712',
        registeredAt: '2021-11-19 14:00:45',
        lastLogin: '2021-11-23 15:00:45',
        profile: 'Selina Kyle'
    },
    {
        //userId:10236,     
        username: 'testUser06',
        email: 'testuser06@example.com',
        passwordHash: '92005A789',
        registeredAt: '2021-11-17 14:00:45',
        lastLogin: '2021-11-23 15:00:45',
        profile: 'Jack Napier'
    },
    {
        //userId:10237,     
        username: 'testUser07',
        email: 'testuser07@example.com',
        passwordHash: '111222333',
        registeredAt: '2021-11-20 14:00:45',
        lastLogin: '2021-11-23 15:00:45',
        profile: 'Pamela Lillian Isley'
    },
    {
        //userId:10238,    
        username: 'testUser08',
        email: 'testuser08@example.com',
        passwordHash: 'Abc123987',
        registeredAt: '2021-11-21 14:00:45',
        lastLogin: '2021-11-23 15:00:45',
        profile: 'Alfred Pennyworth'
    },
    {
        //userId:10239,    
        username: 'testUser09',
        email: 'testuser09@example.com',
        passwordHash: 'Def05A111',
        registeredAt: '2021-11-22 14:00:45',
        lastLogin: '2021-11-23 15:00:45',
        profile: 'Bruce Wayne'
    },
    {
        //userId:10240,     
        username: 'testUser10',
        email: 'testuser10@example.com',
        passwordHash: '234897abc',
        registeredAt: '2021-11-18 14:00:45',
        lastLogin: '2021-11-23 15:00:45',
        profile: 'Jim Gordon'
    }
];

const seedUsers = () => Users.bulkCreate(usersdata);

module.exports = seedUsers;