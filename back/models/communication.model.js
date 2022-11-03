const mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email :{
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true
    } 

})

const Msg = mongoose.model('msg', messageSchema);

module.exports = Msg;