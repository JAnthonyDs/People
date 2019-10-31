const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: String,
    cidade: String,
    foto:String,
    email: String,
    diversao: [String]
})

module.exports = mongoose.model('User',UserSchema);