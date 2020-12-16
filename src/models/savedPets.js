const mongoose = require('mongoose');

const savedPetsSchema = new mongoose.Schema({
    id: String,
    name: String,
    photo: String,
    age: String,
    type: String,
    gender: String
})

const SavedPets = mongoose.model('SavedPets', savedPetsSchema);

module.exports = SavedPets;