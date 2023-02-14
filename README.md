<h1 align="center"> Paw Pals </h1>

<p align="center">
    <img src="./assets/images/logo.png" alt="logo" width="125px" height="125px" />
  <br><br>
  <i> Adopt A Pet Near You!
    <br> built using Node.js and MySQL</i>
  <br>
</p>

<p align="center">
  <a href=""><strong> https://pawpals.herokuapp.com/ </strong></a>
  <br>
</p>

<br>

<div align="center">

![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-ff69b4.svg)
![Contributors](https://img.shields.io/github/contributors/thebobfather2/pawpals?style=plastic&color=ff69b4)
![Forks](https://img.shields.io/github/forks/thebobfather2/pawpals?style=plastic&color=ff69b4)
![Stars](https://img.shields.io/github/stars/thebobfather2/pawpals?style=plastic&color=ff69b4)
![Licence](https://img.shields.io/static/v1?label=License&message=Apache-2.0&color=ff69b4)
![Issues](https://img.shields.io/github/issues/thebobfather2/pawpals?style=plastic&color=ff69b4)

</div>

---

## Description

Welcome to the Paw Pals! Our mission is to help find loving homes for animals in need. Whether you're looking for a cuddly cat, a playful pup, or a quirky rabbit, you'll find your perfect match here. Our extensive database of available pets includes detailed information on breed, age, personality, and more to help you find the right fit for your family.

Adopting a pet is a big decision, and we're here to support you every step of the way. Our knowledgeable staff is available to answer any questions you may have, and our resources page includes information on pet care, training, and more. Start your search today and give an animal in need a second chance at a happy home!

## Table of Contents

- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
  - [Cloning the Repository](#cloning-the-repository)
  - [Prerequisites](#prerequisites)
  - [Setting Up](#setting-up)
- [Mock-Up](#mock-up)
- [Usage](#usage)
- [Tests](#tests)
  - [Prerequisites](#prerequisites-1)
  - [Running Tests](#running-tests)
- [Questions](#questions)
- [Contributing](#contributing)
  - [Contributing Guidelines](#contributing-guidelines)
  - [Code of Conduct](#code-of-conduct)
- [Credits](#credits)
  - [Authors](#authors)
  - [Acknowledgements](#acknowledgements)
- [License](#license)

## Installation

### Cloning the Repository

Click `<> code` - the green button. After clicking, in the local tab, copy the SSH key. Open the terminal in your Macbook or [git bash](https://git-scm.com/downloads), if you have Windows/Linux, and type:

```bash
git clone [paste ssh key]
```

I would recommend downloading [Visual Studio Code](https://code.visualstudio.com/download) to edit the code locally. If you need more information on how to clone a repository, [click here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)!

### Prerequisites

This package requires you to have [Node.js](https://nodejs.org/en/download/), npm, Inquirer, [Express.js](https://expressjs.com/) and [MySQL2](https://www.npmjs.com/package/mysql2) installed on your machine. You can install these by running the code below on your terminal:

For `npm`

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

For `Node.js`

```bash
npm i node@lts
```

For `Express.js`

```bash
npm i express
```

### Setting Up

Open the project in VS Code and make sure you are in the directory of this application before installing `MySQL2`, `dotenv` and `Sequelize`. To install it, type the commands below on your terminal:

For `MySQL2`

```bash
npm i mysql2
```

For `dotenv`

```bash
npm i dotenv
```

For `Sequelize`

```bash
npm i sequelize
```

You can also open the project in VS Code, make sure you are in the directory of this application and then type the command below on your terminal:

```bash
npm i
```

Once you run this, npm will begin the installation process of all of the current project's dependencies.

## Mock-Up

The following images shows the web application's appearance:

<img src="./assets/images/demo1.png" alt="App Screenshot" width="700px" height="342px" />

## Usage

Launch the application by entering the command below on your terminal:

```bash
npm start
```

If you need more guidance on how to use Paw Pals, click [here]() for the tutorial!

## Tests

### Prerequisites

To test this application, you will need to install [Postman API](https://www.postman.com/downloads/) or [Insomnia](https://insomnia.rest/download).

### Running Tests

Open your terminal, make sure you are in the directory of this application and type the command below to seed data to the database so that you can test the routes.

```bash
npm run seed
```

The following animation shows the application's **GET** routes to return all dogs, all cats, and all rabbits being tested in Insomnia:

![In Insomnia, the user tests “GET tags,” “GET Categories,” and “GET All Dogs.”.](./assets/demo1.gif)

The following animation shows the application's **GET** routes to return a single dog, a single cat, and a single rabbit being tested in Insomnia:

![In Insomnia, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Dog.”](./assets/demo2.gif)

The following animation shows the application's **POST, PUT, and DELETE** routes for dogs, cats and rabbits being tested in Insomnia:

![In Insomnia, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Dog.”](./assets/demo3.gif)

## Questions

For questions and support feel free to contact us via:

<a href="mailto:larigens@gmail.com">📧 Email Larissa Guilherme </a>

<a href="mailto:">📧 Email Sarah Jacobs </a>

<a href="mailto:bryanandrewpike@gmail.com">📧 Email Bryan Pike </a>

<a href="mailto:anastasiamarkova@icloud.com">📧 Email Anastasia Markova </a>

<a href="mailto:">📧 Email Naz Yasar </a>

## Contributing

### Contributing Guidelines

Want to report a bug, contribute some code, request a new feature, or improve the documentation? You can submit an issue and we will gladly review it, but before submitting an issue, please search the issue tracker, as it may already exist!

### Code of Conduct

Our Code of Conduct follows the same principles as the [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/), version 2.1.

## Credits

### Authors

🐈‍⬛ <a href="https://github.com/larigens"> Larissa Guilherme </a>

🐕 <a href="https://github.com/thebobfather2"> Bryan Pike </a>

🐈 <a href="https://github.com/mriya20"> Anastasia Markova </a>

🦮 <a href="https://github.com/sarahgjacobs"> Sarah Jacobs </a>

🐇 <a href="https://github.com/nazyasar"> Naz Yasar </a>

### Acknowledgements

- [W3 Schools](https://www.w3schools.com)
- [MDN](https://developer.mozilla.org/en-US/)
- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [README Lab](https://github.com/larigens/readme-lab)
- [Express.js](https://expressjs.com/en/4x/api.html)
- [MySQL](https://dev.mysql.com/doc/)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Stack Overflow](https://stackoverflow.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Sequelize](https://www.npmjs.com/package/sequelize)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [Postman API](https://www.postman.com/)
- [Insomnia](https://insomnia.rest/)

## License

Please refer to the [LICENSE](https://choosealicense.com/licenses/apache-2.0/) in the repo.
