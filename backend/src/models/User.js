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
}, {
    toJSON: {
        virtuals: true
    },
});

UserSchema.virtual('foto_url').get(function() {
    return `http://localhost:3333/files/${this.foto}`
})

module.exports = mongoose.model('User',UserSchema);