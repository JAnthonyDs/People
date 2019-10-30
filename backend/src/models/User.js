const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: String,
    cidade: String,
    email: String
})

module.exports = mongoose.model('User',UserSchema);