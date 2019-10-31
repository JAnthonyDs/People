const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required:true
    },
    foto:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true,
    },
    jogos: [String]
})

module.exports = mongoose.model('User',UserSchema);