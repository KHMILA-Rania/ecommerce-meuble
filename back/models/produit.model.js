const mongoose = require('mongoose');

var produitSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    
    descrption: {
        type: String,
        required: true
    },
    matiere: {
        type: String,
        required: true
    },
    langeur: {
        type: String,
        required: true
    },
    largeur: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    idCataloge:{
        type: String,
        required: true
    }





})

const Produit = mongoose.model('produit', produitSchema);

module.exports = Produit;