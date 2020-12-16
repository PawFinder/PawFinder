const path = require('path');
const express = require('express');
const router = require('express').Router();
const mongoose = require('mongoose');
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require('./config/keys');
const cookieSession = require("cookie-session");
const User = require("./models/pawfinderModels");
const savedPetsCntl = require('./controllers/savedPetsController');
const bodyParser = require('body-parser')
require('dotenv').config();
var petfinder = require("@petfinder/petfinder-js");
//const request = require('request');
const app = express();
const PORT = 3000;

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('Connected to Database'); 
});

const clientId = process.env.PFCLIENTID
const clientSecret = process.env.PFSECRET


const client = new petfinder.Client({ apiKey: clientId, secret: clientSecret })

// get dogs upon load
app.post('/feed', async (req, response) => {
    
    const {type, size, age, gender, postcode} = req.body; 

    await client.animal.search({ type: type, size: size, age: age, gender: gender, postcode: postcode})
        .then(res => {
            response.send(res.data.animals)
        })
})

router.get('/favorites', savedPetsCntl); 

passport.use(
    new GoogleStrategy({
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        // passport callback function
        //check if user already exists in our db with the given profile ID
        User.findOne({ googleId: profile.id }).then((currentUser) => {
            if (currentUser) {
                //if we already have a record with the given profile ID
                done(null, currentUser);
            } else {
                //if not, create a new user 
                new User({
                    googleId: profile.id,
                }).save().then((newUser) => {
                    done(null, newUser);
                });
            }
        })
    })
);

app.get("/auth/google", passport.authenticate("google", {
    scope: ["profile", "email"]
}));
app.get("/auth/google/redirect", passport.authenticate('google'));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

app.use(cookieSession({
    // milliseconds of a day
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

app.use('/build', express.static(path.resolve(__dirname, 'build')));

// app.use('/build', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../build/bundle.js')))

// app.use('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../public/index.html')));
app.use('/', (req, res) => res.sendFile(path.resolve(__dirname, '../public/index.html')));


router.get("auth/google/redirect", passport.authenticate("google"), (req, res) => {
    res.send(req.user);
    res.send("you reached the redirect URI");
});

app.get("/auth/logout", (req, res) => {
    req.logout();
    res.send(req.user);
    console.log('logout');
});



app.listen(PORT, () => console.log(`listening on port ${PORT}`));

module.exports = app;
