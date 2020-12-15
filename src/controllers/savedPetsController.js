const express = require('express');
const router = express.Router();
const SavedPets = require('../models/savedPets');
const User = require('../models/pawfinderModels'); 

router.get('/favorite', (req, res) => {
    User.findOne({ googleId: profile.id }, (err, foundUser) => {
        //console.log(foundUser)
        res.render('FAVORITES.JSX', {
            saved: foundUser.savedPets,
            location: req.session.location
        })
    })
})
router.post('/:id', (req, res) => {
    SavedPets.save(req.params.id, (err, removedSaved) => {
        User.findOne({ googleId: profile.id }, (err, foundUser) => {
            foundUser.savedPets.id(req.params.id).save();
            foundUser.save((err, data) => {
                res.redirect('/favorite');
            })
        })
    })
})
router.delete('/:id', (req, res) => {
    SavedPets.findByIdAndRemove(req.params.id, (err, removedSaved) => {
        User.findOne({ googleId: profile.id }, (err, foundUser) => {
            foundUser.savedPets.id(req.params.id).remove();
            foundUser.save((err, data) => {
                res.redirect('/favorite');
            })
        })
    })
})


module.exports = router; 