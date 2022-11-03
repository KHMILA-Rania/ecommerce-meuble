const mongoose = require('mongoose');

var panierSchema = new mongoose.Schema({
    idClient: {
        type: String,
        required: true,
    },
    idProduit: {
        type: String,
        required: true
    },
    nb:{
        type: Number,
        required: true
    }

})

const Panier = mongoose.model('panier', panierSchema);

module.exports = Panier;