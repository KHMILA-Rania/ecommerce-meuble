const mongoose = require('mongoose');

var catalogeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    dans: {
        type: String,
        required: true
    }

})

const Cataloge = mongoose.model('cataloge', catalogeSchema);

module.exports = Cataloge;