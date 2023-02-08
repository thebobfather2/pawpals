const { Pets } = require('../models');

const petsdata = [
    {
        // petId: 500130,
        petname: 'Sandy',
        age: 2,
        sex: 'F',
        type: 'Dog',
        breed: 'Mixed',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imgurl: 'https://cdn.adopets.com/organization/pet/picture/2021921_104338_1634813018214.JPEG?width=600'
    },
    {
        //petId: 500131,     
        petname: 'Lido',
        age: 5,
        sex: 'M',
        type: 'Dog',
        breed: 'Poodle',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.',
        imgurl: 'https://thehappypuppysite.com/wp-content/uploads/2021/03/Parti-Poodle-HP-long.jpg'
    },
    {
        //petId: 500132,     
        petname: 'Abby',
        age: 1,
        sex: 'M',
        type: 'Dog',
        breed: 'Mixed',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.',
        imgurl: 'https://cdn.adopets.com/organization/pet/picture/2021921_104338_1634813018166.JPEG?width=600'
    },
    {
        //petId: 500133,     
        petname: 'Cinnamon ',
        age: 7,
        sex: 'F',
        type: 'Cat',
        breed: 'Domestic Short Hair',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.',
        imgurl: 'https://www.catbreedslist.com/uploads/cat-pictures/havana-brown-2.jpg'
    },
    {
        //petId: 500134,     
        petname: 'Muray',
        age: 1,
        sex: 'M',
        type: 'Cat',
        breed: 'Abyssinian',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.',
        imgurl: 'https://d3544la1u8djza.cloudfront.net/APHI/Blog/2020/09-24/About+Abyssinians+Appearance+Personality+and+Health+_+ASPCA+Pet+Health+Insurance+_+Abyssinian+cat+resting+atop+a+cat+tree-min.jpg'
    },
    {
        //petId: 500135,     
        petname: 'Ori',
        age: 3,
        sex: 'F',
        type: 'Other',
        breed: 'American Rabbit',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.',
        imgurl: 'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/44972648/2/?bust=1564292024&width=720'
    },
    {
        //petId: 500136,    
        petname: 'Zwili',
        age: 4,
        sex: 'M',
        type: 'Rabbit',
        breed: 'Mini lop',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.',
        imgurl: 'https://lionheadrabbitcare.com/wp-content/uploads/2019/08/mini-lop.jpg'
    },
    {
        //petId: 500137,    
        petname: 'Liam',
        age: 10,
        sex: 'M',
        type: 'Dog',
        breed: 'Mixed',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.',
        imgurl: 'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/affenpinscher-card-large.jpg?bust=1535569433'
    },
    {
        //petId: 500138,     
        petname: 'Adele',
        age: 12,
        sex: 'F',
        type: 'Dog',
        breed: 'Labrador Retriever',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.',
        imgurl: 'https://petkeen.com/wp-content/uploads/2021/05/labrador-retriever-standing-on-green-meadow.jpg'
    },
    {
        //petId: 500139,     
        petname: 'Julianne',
        age: 1,
        sex: 'F',
        type: 'Cat',
        breed: 'Domestic Short Hair',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.',
        imgurl: 'https://www.aspcapetinsurance.com/media/2259/domestic-shorthair-cat-personality-traits.jpg'
    },
    {
        //petId: 500140,     
        petname: 'Keto',
        age: 1,
        sex: 'M',
        type: 'Cat',
        breed: 'Domestic Short Hair',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.',
        imgurl: 'https://www.petguide.com/wp-content/uploads/2015/10/domestic-shorthair-1.jpg'
    },
    {
        //petId: 500141,     
        petname: 'Auqua',
        age: 1,
        sex: 'F',
        type: 'Other',
        breed: 'American Rabbit',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.',
        imgurl: 'https://www.petnsur.co.nz/content/blog/0432798001581900211.jpg?width=1040&height=500&fit=bounds'
    },
    {
        //petId: 500142,    
        petname: 'Copper',
        age: 2,
        sex: 'M',
        type: 'Other',
        breed: 'American Rabbit',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.',
        imgurl: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Ufenau_-_Oryctolagus_cuniculus_2011-07-25_17-33-40.jpg'
    },
    {
        //petId: 500143,     
        petname: 'Bobo',
        age: 2,
        sex: 'M',
        type: 'Cat',
        breed: 'Maine Coon',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.',
        imgurl: 'https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2021/01/word-image.jpeg?fit=1020%2C765&ssl=1'
    },
    {
        //petId: 500144,     
        petname: 'Princess',
        age: 1,
        sex: 'F',
        type: 'Dog',
        breed: 'German Shepard',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.',
        imgurl: 'https://www.thesprucepets.com/thmb/W7VhLK0I1Bo85cbLgvvENG9IrZ0=/1500x1000/filters:fill(auto,1)/breed_profile_germansheperd_1118000_hero_2536-6dc4ce05871945b8a894bd80c0ecc7f1.jpg'
    },
    {
        //petId: 500145,     
        petname: 'Almond',
        age: 3,
        sex: 'M',
        type: 'Cat',
        breed: 'Domestic Short Hair',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elaliquait.',
        imgurl: '../images/cats/cat1.jpg'
    },



];

const seedPets = () => Pets.bulkCreate(petsdata);

module.exports = seedPets;