const mongoose = require('mongoose');

var commandeSchema = new mongoose.Schema({
    idDeClinet: {
        type: String,
        required: true,
    },
    idProduit: {
        type: String,
        required: true
    },
    nobmbre:{
        type: Number,
        required: true
    },
    date:{
        type : Date,
        default : Date.now
    }

})

const Commande = mongoose.model('commande', commandeSchema);

module.exports = Commande;