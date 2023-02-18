const bcrypt = require('bcrypt');
var { User } = require('../models');
var LocalStrategy = require('passport-local').Strategy;

const passportConfig = (passport, user) => {
    User = user;

    // Serializing the user ID.
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    // Finding the user by ID when deserializing.
    // passport.deserializeUser(function(id, done) {
    //     User.findById(id, function (err, user) {
    //       done(err, user);
    //     });
    //   });

    passport.deserializeUser((id, done) => {
        User.findByPk(id).then((user) => {
            if (user) {
                 done(null, user.get());
            } else {
                 done(null, false);
            }
        });
    });

    //Set up local Sign-up.
    passport.use('local-signup', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass the req to the function to collect user's input.
        },
        (req, email, password, done) => {
            const generateHash = (password) => {
                return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
            };
            // Checks if email already exists.
            User.findOne({
                where: {
                    email: email
                }
            }).then((user) => {
                if (user) {
                    return done(null, false, { message: 'That email is already taken' });
                } else {
                    var passwordHash = generateHash(password);
                    var newUserData =
                    {
                        email: email,
                        password: passwordHash,
                        firstname: req.body.firstname,
                        lastname: req.body.lastname
                    };
                    // Adds new user to the database.
                    User.create(newUserData).then((newUser, created) => {
                        if (!newUser) {
                            return done(null, false);
                        }
                        else if (newUser) {
                            return done(null, newUser);
                        }
                        else {
                            console.log(created);
                        }
                    });
                }
            });
        }
    ))

    //Set up local Login.
    passport.use('local-login', new LocalStrategy(
        {
            //  Override usernameField with email.
            usernameField: 'email',
            passwordField: 'password',
        },
        (email, password, done) => {
            User = user;
            const checkPassword = (loginPw, password) => {
                return bcrypt.compareSync(password, loginPw);
            }
            // Checks if email exists in the database.
            User.findOne({
                where: {
                    email: email
                }
            }).then((user) => {
                if (!user) {
                    return done(null, false, { message: 'Email does not exist' });
                }
                // Checks if password matches with the one stored in the database.
                if (!checkPassword(user.password, password)) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
                var userinfo = user.get();
                return done(null, userinfo);
            }).catch((err) => {
                console.log("Error:", err);
                return done(null, false, { message: 'Something went wrong with your login' });
            });
        }
    ));
}

module.exports = { passportConfig };