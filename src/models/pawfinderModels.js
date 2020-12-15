const mongoose = require('mongoose'); 
const SavedPets = require('./savedPets.js');
const Schema = mongoose.Schema; 

const userSchema = new Schema({
    googleId: {
        type: String
    },
    savedPets: [SavedPets.schema]
   
});

const User = mongoose.model('user', userSchema)


module.exports = User; 