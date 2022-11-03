const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    dateNaissance: {
        type: Date,
        required: true
    },
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    cin: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    
})

module.exports = mongoose.model('User', userSchema)