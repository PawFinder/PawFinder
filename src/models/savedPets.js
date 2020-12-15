const mongoose = require('mongoose');

const savedPetsSchema = new mongoose.Schema({
    id: String,
    shelterId: String,
    name: String,
    photo: String,
    age: String,
    animal: String,
    breed: String,
    sex: String
})

const SavedPets = mongoose.model('SavedPets', savedPetsSchema);

module.exports = SavedPets;