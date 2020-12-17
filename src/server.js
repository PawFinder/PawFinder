const path = require('path');
const express = require('express');
const cors = require('cors');
const router = require('express').Router();
const mongoose = require('mongoose');
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require('./config/keys');
const cookieSession = require("cookie-session");
const User = require("./models/pawfinderModels");
const savedPetsCntl = require('./controllers/savedPetsController');
const bodyParser = require('body-parser')
const axios = require('axios');
require('dotenv').config();
var petfinder = require("@petfinder/petfinder-js");
//const request = require('request');
const app = express();
const PORT = 3000;
app.use(cors());
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



app.post('/feed', async (req, response) => {

  console.log('Inside post.feed in server.js', req.body);
 
  const { type, size, age, gender, location } = req.body;

console.log("Type of animal in req.body", req.body);
  //let postcode = contact.adress.postcode; 
  await client.animal.search({ 'type': type, 'size': size, 'age': age, 'gender': gender, 'location': location })
    .then(res => {
      response.send(res.data.animals)
    })
    .catch(function (error) {
      console.log(error)
    })
    })

router.get('/favorites', savedPetsCntl);

app.use('/build', express.static(path.resolve(__dirname, 'build')));

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
