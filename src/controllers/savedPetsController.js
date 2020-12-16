const express = require('express');
const router = express.Router();
const SavedPets = require('../models/savedPets');
const User = require('../models/pawfinderModels'); 

//generate all fav. animals from googleId user 
router.get('/', (req, res) => {
    User.findOne({ googleId: profile.id }, (err, foundUser) => {
        //console.log(foundUser)
        res.render('/', {
            saved: foundUser.savedPets,
            location: req.session.location
        })
    })
})

//add a fav. animal to array of user 
router.post('/add', (req, res) => {
  console.log('inside of add', User.profile.id); 
  const {id, name, photo,age, type, gender} = req.body; 
    const newSavedPet = new SavedPets({ id, name, photo, age, type, gender });
    newSavedPet.insertOne((err, addSaved) => {

        User.findOne({ googleId: profile.id }, (err, foundUser) => {
            foundUser.newSavedPet.id(id).insertOne();
            foundUser.newSavedPet.name(name).insertOne();
            foundUser.newSavedPet.photo(photo).insertOne();
            foundUser.newSavedPet.age(age).insertOne();
            foundUser.newSavedPet.type(type).insertOne();
            foundUser.newSavedPet.gender(gender).insertOne();
            foundUser.insertOne((err, data) => {
                res.redirect('/favorites');
            })
        })
    })
})

//delete animal with /:id from array 
router.delete('/:id', (req, res) => {
    SavedPets.findByIdAndRemove(req.params.id, (err, removedSaved) => {
        User.findOne({ googleId: profile.id }, (err, foundUser) => {
            foundUser.savedPets.id(req.params.id).remove();
            foundUser.save((err, data) => {
                res.redirect('/favorites');
            })
        })
    })
})


module.exports = router; 